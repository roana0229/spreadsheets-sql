function _() {}

/**
 * This method use to create SpreadSheetsSQL instance.
 * @param {String} id SpreadSheet id
 * @param {String} name SpreadSheet sheet name
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function open(id, name) {
  return new SpreadSheetsSQL_(id, name);
}

/**
 * This method use to get select query result.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).select(xxx).filter(xxx).orderBy(xxx).result();
 * </pre></code>
 * @return {Object[]} query result
 * <pre><code>[
 *   {
 *     name: 'Gail',
 *     age: 20,
 *     married: true,
 *     company: 'Google'
 *   },{
 *     name: 'Plato',
 *     age: 18,
 *     married: false,
 *     company: 'Yahoo'
 *   }
 * ]
 * </pre></code>
 */
function result() {
  throw new Error("it's a mock method for content assist");
}

/**
 * This method use to get columns.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).select(['name', 'age', 'married', 'company']).result();
 * </pre></code>
 * @param {String[]} selects column array
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function select(selects) {
  throw new Error("it's a mock method for content assist");
}

/**
 * This method use to filter result.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).select(xxx).filter('age < 20').result();
 * </pre></code>
 * @param {String} filter filtering query
 * <br/><br/>Available symbols
 * <table class="arguments table table-condensed"><tbody>
 *   <tr>
 *     <td><b>Symbol</b></td>
 *     <td><b>Example</b></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">=</td>
 *     <td style="white-space:nowrap"><code>age = 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap"><</td>
 *     <td style="white-space:nowrap"><code>age < 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap"><=</td>
 *     <td style="white-space:nowrap"><code>age <= 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">></td>
 *     <td style="white-space:nowrap"><code>age > 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">>=</td>
 *     <td style="white-space:nowrap"><code>age >= 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">IN</td>
 *     <td style="white-space:nowrap"><code>company IN Apple,Google</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">OR</td>
 *     <td style="white-space:nowrap"><code>company = Apple OR company = Google</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">AND</td>
 *     <td style="white-space:nowrap"><code>company = Apple AND age > 20</code></td>
 *   </tr>
 * </tbody></table>
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function filter(filter) {
  throw new Error("it's a mock method for content assist");
}

/**
 * This method use to sort by column.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).select(xxx).orderBy(['name', 'age']).result();
 * </pre></code>
 * @param {String[]} orderBy sort by columns
 * @param {Boolean} asc true (asc) or false (desc)
 * <br/><br/>If code is orderBy([’name’, ‘age']), sort by age after sort by name.
 * <br/><br/>Default is true (asc).
 * <br/>orderBy(['age']) and orderBy(['age'], true) are same.
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function orderBy(orderBy, asc) {
  throw new Error("it's a mock method for content assist");
}

/**
 * This method use to insert column.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).insertRows([
 *   {name: 'Colt', age: 30, married: false, company: 'Microsoft'},
 *   {name: 'Smith', age: 24, married: true, company: 'Adobe'}
 * ]);
 * </pre></code>
 * @param {Object[]} data insert rows data
 * <pre><code>[
 *   {
 *     name: 'Colt',
 *     age: 30,
 *     married: false,
 *     company: 'Microsoft'
 *   },{
 *     name: 'Smith',
 *     age: 24,
 *     married: true,
 *     company: 'Adobe'
 *   }
 * ]
 * </pre></code>
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function insertRows(data) {
  throw new Error("it's a mock method for content assist");
}

/**
 * This method use to update columns.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).updateRows({company = 'Adobe'}, 'name = Colt');
 * </pre></code>
 * @param {Object} data update row data
 * <pre><code>{
 *   company: 'Adobe'
 * }
 * </pre></code>
 * @param {String} filter filtering query
 * <br/><br/>Available symbols
 * <table class="arguments table table-condensed"><tbody>
 *   <tr>
 *     <td><b>Symbol</b></td>
 *     <td><b>Example</b></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">=</td>
 *     <td style="white-space:nowrap"><code>age = 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap"><</td>
 *     <td style="white-space:nowrap"><code>age < 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap"><=</td>
 *     <td style="white-space:nowrap"><code>age <= 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">></td>
 *     <td style="white-space:nowrap"><code>age > 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">>=</td>
 *     <td style="white-space:nowrap"><code>age >= 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">IN</td>
 *     <td style="white-space:nowrap"><code>company IN Apple,Google</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">OR</td>
 *     <td style="white-space:nowrap"><code>company = Apple OR company = Google</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">AND</td>
 *     <td style="white-space:nowrap"><code>company = Apple AND age > 20</code></td>
 *   </tr>
 * </tbody></table>
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function updateRows(data, filter) {
  throw new Error("it's a mock method for content assist");
  A
}

/**
 * This method use to delete columns.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).deleteRows('name = Colt AND company = Adobe');
 * </pre></code>
 * @param {String} filter filtering query
 * <br/><br/>Available symbols
 * <table class="arguments table table-condensed"><tbody>
 *   <tr>
 *     <td><b>Symbol</b></td>
 *     <td><b>Example</b></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">=</td>
 *     <td style="white-space:nowrap"><code>age = 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap"><</td>
 *     <td style="white-space:nowrap"><code>age < 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap"><=</td>
 *     <td style="white-space:nowrap"><code>age <= 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">></td>
 *     <td style="white-space:nowrap"><code>age > 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">>=</td>
 *     <td style="white-space:nowrap"><code>age >= 20</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">IN</td>
 *     <td style="white-space:nowrap"><code>company IN Apple,Google</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">OR</td>
 *     <td style="white-space:nowrap"><code>company = Apple OR company = Google</code></td>
 *   </tr>
 *   <tr>
 *     <td style="white-space:nowrap">AND</td>
 *     <td style="white-space:nowrap"><code>company = Apple AND age > 20</code></td>
 *   </tr>
 * </tbody></table>
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function deleteRows(filter) {
  throw new Error("it's a mock method for content assist");
}

/**
 * THis method use to resize to fit SpreadSheet.
 * <pre><code>Example: SpreadSheetsSQL.open(id, name).resizeToFit();
 * </pre></code>
 * @return {SpreadSheetsSQL} SpreadSheetsSQL instance
 */
function resizeToFit() {
  throw new Error("it's a mock method for content assist");
}

const KIND_ = {
  OR: 0,
  AND: 1,
  EQUAL: 2,
  LESS: 3,
  LESSEQU: 4,
  GREAT: 5,
  GREATEQU: 6,
  IN: 7,
  VAR: 8
};

class Token_ {
  constructor(value) {
    if (value === 'true') {
      this.value = true;
    } else if (value === 'false') {
      this.value = false;
    } else if (value === 'NULL') {
      this.value = '';
    } else if (value.match(/\D/g) === null) {
      this.value = parseFloat(value);
    } else {
      this.value = value;
    }
    this.kind = this._checkKind(value);
  }

  _checkKind(value) {
    switch (value) {
      case 'AND':
        return KIND_.AND;
      case 'OR':
        return KIND_.OR;
      case '=':
        return KIND_.EQUAL;
      case '<':
        return KIND_.LESS;
      case '<=':
        return KIND_.LESSEQU;
      case '>':
        return KIND_.GREAT;
      case '>=':
        return KIND_.GREATEQU;
      case 'IN':
        return KIND_.IN;
      default:
        return KIND_.VAR;
    }
  }
}

class Node_ {
  constructor(root, left, right) {
    this.root = root;
    this.left = left;
    this.right = right;
  }
}

class SpreadSheetsSQL_ {

  constructor(id, name) {
    this.sheet_ = SpreadsheetApp.openById(id).getSheetByName(name);
  }

  data_() {
    if (this.sheet_.getLastRow() <= 1 || this.sheet_.getLastColumn() <= 0) {
      return [];
    }
    return this.sheet_.getSheetValues(2, 1, this.sheet_.getLastRow() - 1, this.sheet_.getLastColumn());
  }

  columns_() {
    return this.sheet_.getSheetValues(1, 1, 1, this.sheet_.getLastColumn())[0];
  }

  getSelectColumnIndexes_(selects) {
    const columnIndexes = [];
    const columns = this.columns_();
    for (let i = 0, len = selects.length; i < len; i++) {
      columnIndexes.push(columns.indexOf(selects[i]));
    }
    columnIndexes.sort();
    return columnIndexes;
  }

  parseJsonToValuesArray_(data) {
    const columns = this.columns_();
    const dataArray = [];
    for (const key in data) {
      const index = columns.indexOf(key);
      if (index < 0) {
        throw new Error(`insert error: not found ${key} column`);
      }
      dataArray[index] = data[key];
    }
    return dataArray;
  }

  parseNode_(statement) {
    let node = null;
    const spaceSplitParts = statement.split(' ');
    if (spaceSplitParts.length === 3) {
      node = new Node_(new Token_(spaceSplitParts[1]), new Token_(spaceSplitParts[0]), new Token_(spaceSplitParts[2]));

    } else {
      let splitString = '';
      // 優先度順(降順)
      if (spaceSplitParts.indexOf('OR') > 0) {
        splitString = 'OR';
      } else if (spaceSplitParts.indexOf('AND') > 0) {
        splitString = 'AND';
      } else {
        throw new Error('parse statement error: can use OR,AND statement');
      }

      const parts = statement.split(` ${splitString} `);
      if (parts.length === 2) {
        node = new Node_(new Token_(splitString), this.parseNode_(parts[0]), this.parseNode_(parts[1]));

      } else { 
        // OR,ANDが2つ以上ある場合の対処:初めのOR,ANDで2つに区切る
        let rightPart = '';
        for (let i = 1, len = parts.length; i < len; i++) {
          if (i > 1) {
            rightPart += ` ${splitString} `;
          }
          rightPart += parts[i];
        }
        node = new Node_(new Token_(splitString), this.parseNode_(parts[0]), this.parseNode_(rightPart));
      }
    }

    return node;
  }

  isOkByFilter_(filterNode, obj) {
    switch (filterNode['root'].kind) {
      case KIND_.OR:
        return this.isOkByFilter_(filterNode['left'], obj) || this.isOkByFilter_(filterNode['right'], obj);
      case KIND_.AND:
        return this.isOkByFilter_(filterNode['left'], obj) && this.isOkByFilter_(filterNode['right'], obj);
      case KIND_.EQUAL:
        return obj[filterNode['left'].value] === filterNode['right'].value;
      case KIND_.LESS:
        return obj[filterNode['left'].value] < filterNode['right'].value;
      case KIND_.LESSEQU:
        return obj[filterNode['left'].value] <= filterNode['right'].value;
      case KIND_.GREAT:
        return obj[filterNode['left'].value] > filterNode['right'].value;
      case KIND_.GREATEQU:
        return obj[filterNode['left'].value] >= filterNode['right'].value;
      case KIND_.IN:
        return filterNode['right'].value.split(',').indexOf(String(obj[filterNode['left'].value])) >= 0;
      default:
        return true;
    }
  }

  result() {
    return this.result_;
  }

  select(selects) {
    this.result_ = [];
    const columns = this.columns_();
    const sheetData = this.data_();

    const selectColumnIndexes = this.getSelectColumnIndexes_(selects);
    for (let i = 0, iLen = sheetData.length; i < iLen; i++) {
      const obj = {};
      for (let j = 0, jLen = sheetData[i].length; j < jLen; j++) {
        if (selectColumnIndexes.indexOf(j) >= 0) {
          obj[columns[j]] = sheetData[i][j];
        }
      }
      if (Object.keys(obj).length > 0) {
        this.result_.push(obj);
      }
    }

    return this;
  }

  filter(filter) {
    const filteredResult = [];
    for (let i = 0, len = this.result_.length; i < len; i++) {
      const obj = this.result_[i];
      if (!this.isOkByFilter_(this.parseNode_(filter), obj)) continue;
      filteredResult.push(obj);
    }
    this.result_ = filteredResult;

    return this;
  }

  orderBy(orderBy, asc = true) {
    for (let i = 0, iLen = orderBy.length; i < iLen; i++) {
    // }
    // for (let j = 0, jLen = this.result_.length; j < jLen; j++) {
      this.result_.sort((a, b) => {
        if (a[orderBy[i]] < b[orderBy[i]]) return asc ? -1 : 1;
        if (a[orderBy[i]] > b[orderBy[i]]) return asc ? 1 : -1;
        return 0;
      });
    }
    // }

    return this;
  }

  insertRows(data) {
    for (let i = 0, len = data.length; i < len; i++) {
      const dataArray = this.parseJsonToValuesArray_(data[i]);
      this.sheet_.appendRow(dataArray);
    }
    return this;
  }

  updateRows(data, filter = '') {
    const columns = this.columns_();
    const sheetData = this.data_();

    for (let i = 0, iLen = sheetData.length; i < iLen; i++) {
      const obj = {};
      for (let j = 0, jLen = sheetData[i].length; j < jLen; j++) {
        obj[columns[j]] = sheetData[i][j];
      }

      if (filter) {
        if (!this.isOkByFilter_(this.parseNode_(filter), obj)) continue;
      }

      const dataArray = sheetData[i];
      const replaseDataArray = this.parseJsonToValuesArray_(data);
      for (let k = 0, kLen = dataArray.length; k < kLen; k++) {
        if (replaseDataArray[k] !== void 0) {
          dataArray[k] = replaseDataArray[k];
        }
      }

      const targetRange = this.sheet_.getRange(i + 2, 1, 1, this.sheet_.getLastColumn());
      targetRange.setValues([dataArray]);
    }

    return this;
  }

  deleteRows(filter = '') {
    const columns = this.columns_();
    const sheetData = this.data_();

    for (let i = sheetData.length - 1; i >= 0; i--) {
      const obj = {};
      for (let j = 0, jLen = sheetData[i].length; j < jLen; j++) {
        obj[columns[j]] = sheetData[i][j];
      }

      if (filter) {
        if (!this.isOkByFilter_(this.parseNode_(filter), obj)) continue;
      }

      this.sheet_.deleteRows(i + 2, 1);
    }

    return this;
  }

  resizeToFit() {
    const startColumn = this.sheet_.getLastColumn() + 1;
    const deleteColumnLength = this.sheet_.getMaxColumns() - startColumn + 1;
    const startRow = this.sheet_.getLastRow() + 1;
    const deleteRowLenth = this.sheet_.getMaxRows() - startRow + 1;
    if (deleteColumnLength > 0) {
      this.sheet_.deleteColumns(startColumn, deleteColumnLength);
    }
    if (deleteRowLenth) {
      this.sheet_.deleteRows(startRow, deleteRowLenth);
    }

    return this;
  }

}

