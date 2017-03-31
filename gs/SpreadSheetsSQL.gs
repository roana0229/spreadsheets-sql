"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function classCallCheck_(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var KIND_ = {
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

var Token_ = (function () {
  function Token_(value) {
    classCallCheck_(this, Token_);

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

  _createClass(Token_, [{
    key: "_checkKind",
    value: function _checkKind(value) {
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
  }]);

  return Token_;
})();

var Node_ = function Node_(root, left, right) {
  classCallCheck_(this, Node_);

  this.root = root;
  this.left = left;
  this.right = right;
};

var SpreadSheetsSQL_ = (function () {
  function SpreadSheetsSQL_(id, name) {
    classCallCheck_(this, SpreadSheetsSQL_);

    this.sheet_ = SpreadsheetApp.openById(id).getSheetByName(name);
  }

  _createClass(SpreadSheetsSQL_, [{
    key: "data_",
    value: function data_() {
      if (this.sheet_.getLastRow() <= 1 || this.sheet_.getLastColumn() <= 0) {
        return [];
      }
      return this.sheet_.getSheetValues(2, 1, this.sheet_.getLastRow() - 1, this.sheet_.getLastColumn());
    }
  }, {
    key: "columns_",
    value: function columns_() {
      return this.sheet_.getSheetValues(1, 1, 1, this.sheet_.getLastColumn())[0];
    }
  }, {
    key: "getSelectColumnIndexes_",
    value: function getSelectColumnIndexes_(selects) {
      var columnIndexes = [];
      var columns = this.columns_();
      for (var i = 0, len = selects.length; i < len; i++) {
        columnIndexes.push(columns.indexOf(selects[i]));
      }
      columnIndexes.sort();
      return columnIndexes;
    }
  }, {
    key: "parseJsonToValuesArray_",
    value: function parseJsonToValuesArray_(data) {
      var columns = this.columns_();
      var dataArray = [];
      for (var key in data) {
        var index = columns.indexOf(key);
        if (index < 0) {
          throw new Error("insert error: not found " + key + " column");
        }
        dataArray[index] = data[key];
      }
      return dataArray;
    }
  }, {
    key: "parseNode_",
    value: function parseNode_(statement) {
      var node = null;
      var spaceSplitParts = statement.split(' ');
      if (spaceSplitParts.length === 3) {
        node = new Node_(new Token_(spaceSplitParts[1]), new Token_(spaceSplitParts[0]), new Token_(spaceSplitParts[2]));
      } else {
        var splitString = '';
        // 優先度順(降順)
        if (spaceSplitParts.indexOf('OR') > 0) {
          splitString = 'OR';
        } else if (spaceSplitParts.indexOf('AND') > 0) {
          splitString = 'AND';
        } else {
          throw new Error('parse statement error: can use OR,AND statement');
        }

        var parts = statement.split(" " + splitString + " ");
        if (parts.length === 2) {
          node = new Node_(new Token_(splitString), this.parseNode_(parts[0]), this.parseNode_(parts[1]));
        } else {
          // OR,ANDが2つ以上ある場合の対処:初めのOR,ANDで2つに区切る
          var rightPart = '';
          for (var i = 1, len = parts.length; i < len; i++) {
            if (i > 1) {
              rightPart += " " + splitString + " ";
            }
            rightPart += parts[i];
          }
          node = new Node_(new Token_(splitString), this.parseNode_(parts[0]), this.parseNode_(rightPart));
        }
      }

      return node;
    }
  }, {
    key: "isOkByFilter_",
    value: function isOkByFilter_(filterNode, obj) {
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
  }, {
    key: "result",
    value: function result() {
      return this.result_;
    }
  }, {
    key: "select",
    value: function select(selects) {
      this.result_ = [];
      var columns = this.columns_();
      var sheetData = this.data_();

      var selectColumnIndexes = this.getSelectColumnIndexes_(selects);
      for (var i = 0, iLen = sheetData.length; i < iLen; i++) {
        var obj = {};
        for (var j = 0, jLen = sheetData[i].length; j < jLen; j++) {
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
  }, {
    key: "filter",
    value: function filter(_filter) {
      var filteredResult = [];
      for (var i = 0, len = this.result_.length; i < len; i++) {
        var obj = this.result_[i];
        if (!this.isOkByFilter_(this.parseNode_(_filter), obj)) continue;
        filteredResult.push(obj);
      }
      this.result_ = filteredResult;

      return this;
    }
  }, {
    key: "orderBy",
    value: function orderBy(_orderBy) {
      var _this = this;

      var asc = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var _loop = function (i, iLen) {
        _this.result_.sort(function (a, b) {
          if (a[_orderBy[i]] < b[_orderBy[i]]) return asc ? -1 : 1;
          if (a[_orderBy[i]] > b[_orderBy[i]]) return asc ? 1 : -1;
          return 0;
        });
      };

      for (var i = 0, iLen = _orderBy.length; i < iLen; i++) {
        _loop(i, iLen);
      }

      return this;
    }
  }, {
    key: "insertRows",
    value: function insertRows(data) {
      for (var i = 0, len = data.length; i < len; i++) {
        var dataArray = this.parseJsonToValuesArray_(data[i]);
        this.sheet_.appendRow(dataArray);
      }
      return this;
    }
  }, {
    key: "updateRows",
    value: function updateRows(data) {
      var filter = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      var columns = this.columns_();
      var sheetData = this.data_();

      for (var i = 0, iLen = sheetData.length; i < iLen; i++) {
        var obj = {};
        for (var j = 0, jLen = sheetData[i].length; j < jLen; j++) {
          obj[columns[j]] = sheetData[i][j];
        }

        if (filter) {
          if (!this.isOkByFilter_(this.parseNode_(filter), obj)) continue;
        }

        var dataArray = sheetData[i];
        var replaseDataArray = this.parseJsonToValuesArray_(data);
        for (var k = 0, kLen = dataArray.length; k < kLen; k++) {
          if (replaseDataArray[k] !== void 0) {
            dataArray[k] = replaseDataArray[k];
          }
        }

        var targetRange = this.sheet_.getRange(i + 2, 1, 1, this.sheet_.getLastColumn());
        targetRange.setValues([dataArray]);
      }

      return this;
    }
  }, {
    key: "deleteRows",
    value: function deleteRows() {
      var filter = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      var columns = this.columns_();
      var sheetData = this.data_();

      for (var i = sheetData.length - 1; i >= 0; i--) {
        var obj = {};
        for (var j = 0, jLen = sheetData[i].length; j < jLen; j++) {
          obj[columns[j]] = sheetData[i][j];
        }

        if (filter) {
          if (!this.isOkByFilter_(this.parseNode_(filter), obj)) continue;
        }

        this.sheet_.deleteRows(i + 2, 1);
      }

      return this;
    }
  }, {
    key: "resizeToFit",
    value: function resizeToFit() {
      var startColumn = this.sheet_.getLastColumn() + 1;
      var deleteColumnLength = this.sheet_.getMaxColumns() - startColumn + 1;
      var startRow = this.sheet_.getLastRow() + 1;
      var deleteRowLenth = this.sheet_.getMaxRows() - startRow + 1;
      if (deleteColumnLength > 0) {
        this.sheet_.deleteColumns(startColumn, deleteColumnLength);
      }
      if (deleteRowLenth) {
        this.sheet_.deleteRows(startRow, deleteRowLenth);
      }

      return this;
    }
  }]);

  return SpreadSheetsSQL_;
})();
