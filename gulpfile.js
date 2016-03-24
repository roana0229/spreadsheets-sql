'use strict';

const GAS_ID = process.env.GAS_ID;

class Logger {
  constructor() {
  }

  log(message) {
    console.log(message);
  }
}

const gulp = require('gulp'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    async = require('async'),
    spawn = require('child_process').spawn,
    Manager = require('gas-manager').Manager,
    logger = new Logger();

const manager = new Manager({
    'refresh_token' : process.env.REFRESH_TOKEN,
    'client_id' : process.env.CLIENT_ID,
    'client_secret' : process.env.CLIENT_SECRET
});

const PATH = {
  'gs': 'gs',
  'js': 'js',
  'backup': 'backup'
};

const mutalConvertFileType = (type) => {
  switch(type) {
    case 'server_js':
      return 'gs';
    case 'gs':
      return 'server_js';
    case 'html':
      return 'html';
    default:
      return '';
  }
};

const getFileTypeFromPath = (path) => path.replace(/^.+\./, '');
const getFileNameFromPath = (path) => path.replace(/^.+\//, '').replace(/\..+/, '');
const getFileContentFromPath = (path) => fs.readFileSync(path).toString();

const rmdir = (path) => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, _index) => {
      const curPath = `${path}/${file}`;
      if(fs.lstatSync(curPath).isDirectory()) {
        rmdir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

const syncOneFile = (event, path) => {
  const changeFileType = getFileNameFromPath(path);
  const changeFileName = getFileNameFromPath(path);

  if (changeFileName === '') {
    return;
  }

  manager.getProject(GAS_ID, (res, gasProject) => {
    const files = gasProject.origin.files;
    if (event === 'change') {
      const changeFileContent = getFileContentFromPath(path);
      async.each(files, (file, next) => {
        if (file.name === changeFileName) {
          logger.log(`# ${changeFileName} update`);
          gasProject.changeFile(file.name, {
            source: changeFileContent
          });
        }
        next();
      }, (err) => {
        if (err) { 
          throw new Error(err);
        } else {
          logger.log('updated');
        }
      });
    } else if (event === 'add') {
      const changeFileContent = getFileContentFromPath(path);
      logger.log(`# ${changeFileName} add`);
      gasProject.addFile(
        changeFileName,
        mutalConvertFileType(changeFileType),
        changeFileContent
      );

    } else if (event === 'unlink') {
      logger.log(`# ${changeFileName} delete`);
      gasProject.deleteFile(changeFileName);

    } else {
      logger.log('event missmatch');
    }

    gasProject.deploy((err, project, _response) => {
      if(err) {
        throw new Error(err);
      } else {
        logger.log('#### deployed ####');
      }
    });
  });
};

gulp.task('default', ['watch', 'babel-watch']);

gulp.task('watch', () => {
  const url = `https://script.google.com/d/${GAS_ID}/edit`;
  spawn("open", [url]);
  watch(`./${PATH['gs']}/*.gs`, (o) => {
    syncOneFile(o.event.toString(), o.path.toString());
  });
});

gulp.task('babel-watch', () => {
  watch(`./${PATH['js']}/*.js`, (o) => {
    const path = o.path.toString();
    const fileName = getFileNameFromPath(path);
    logger.log(`# ${fileName}.js convert`);
    gulp.src(path)
      .pipe(plumber())
      .pipe(babel())
      .pipe(rename({
        extname: '.gs'
      }))
      .pipe(gulp.dest(`./${PATH['gs']}`));
  });
});

gulp.task('babel', () => {
  return gulp.src(`./${PATH['js']}/*.js`)
          .pipe(plumber())
          .pipe(babel())
          .pipe(rename({
            extname: '.gs'
          }))
          .pipe(gulp.dest(`./${PATH['gs']}`));
});

gulp.task('download', () => {
  manager.getProject(GAS_ID, (res, gasProject) => {
    rmdir(PATH['gs']);
    mkdirp(PATH['gs'],  (err) => {
      if (err) { 
        throw new Error(err);
      }
    });

    const files = gasProject.origin.files;
    async.each(files, (file, next) => {
      fs.writeFileSync(`${PATH['gs']}/${file.name}.${mutalConvertFileType(file.type)}`, file.source);
      logger.log('# ${file.name} saved');
      next();
    }, (err) => {
      if (err) { 
        throw new Error(err);
      } else {
        logger.log('#### dowloaded ####');
      }
    });
  });
});

gulp.task('upload', ['babel'], () => {
  manager.getProject(GAS_ID, (res, gasProject) => {
    const files = gasProject.origin.files;
    const localFiles = [];
    const fileNameList = fs.readdirSync(PATH['gs']);
    async.each(fileNameList, (file, next) => {
      const path = `${PATH['gs']}/${file}`;
      if (fs.statSync(path).isFile()) {
        const fileType = getFileTypeFromPath(path);
        const fileName = getFileNameFromPath(path);
        const fileContent = getFileContentFromPath(path);
        localFiles.push({
          type: fileType,
          name: fileName,
          content: fileContent,
          uploaded: false
        });
      }
      next();
    }, (err) => {
      if (err) { 
        throw new Error(err);
      } else {
        logger.log('## local readed');
      }
    });

    rmdir(PATH['backup']);
    mkdirp(PATH['backup'], (err) => {
      if (err) { 
        throw new Error(err);
      }
    });

    async.each(files, (file, next) => {
      fs.writeFileSync(`${PATH['backup']}/${file.name}.${mutalConvertFileType(file.type)}`, file.source);

     async.each(localFiles, (localFile, next) => {
        if (file.name === localFile.name) {
          localFile['uploaded'] = true;
          gasProject.changeFile(file.name, {
            source: localFile.contnet
          });
        }
        next();
      }, (err) => {
        if (err) { 
          throw new Error(err);
        } else {
          logger.log(`# ${file.name} updated`);
        }
      });
      next();
    }, (err) => {
      if (err) { 
        throw new Error(err);
      } else {
        logger.log('## finish updated');
      }
    });

    async.each(localFiles, (localFile, next) => {
      if (!localFile.uploaded && localFile.name !== '') {
        gasProject.addFile(
          localFile.name,
          mutalConvertFileType(localFile.type),
          localFile.content
        );
        logger.log(`# ${localFile.name} added`);
      }
      next();
    }, (err) => {
      if (err) { 
        throw new Error(err);
      } else {
        logger.log('## finish added');
      }
    });

    async.each(files, (file, next) => {
      let isDelete = true;
      async.each(localFiles, (localFile, innerNext) => {
        if (isDelete && file.name == localFile.name) {
          isDelete = false;
        }
        innerNext();
      }, (_err) => {
        if (isDelete) {
          gasProject.deleteFile(file.name);
          logger.log(`# ${file.name} deleted`);
        }
        next();
      });
    }, (err) => {
      if (err) { 
        throw new Error(err);
      } else {
        logger.log('## finish deleted');
      }
    });

    gasProject.deploy((err, project, _response) => {
      if(err) {
        throw new Error(err);
      } else {
        logger.log('#### deployed ####');
      }
    });
  });
});

