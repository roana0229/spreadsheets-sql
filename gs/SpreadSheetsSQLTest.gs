'use strict';

var SPREADSHEET_ID_ = PropertiesService.getScriptProperties().getProperty('TEST_SHEET_ID');

function testSelect_() {
  Logger.log('start: test-select');

  GSUnit.assertEquals('Check All Data Length', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).result().length, 30);

  GSUnit.assertEquals('Check Select Column 1', Object.keys(open(SPREADSHEET_ID_, 'test-select').select(['name']).result()[0]).length, 1);

  GSUnit.assertEquals('Check Select Column 4', Object.keys(open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).result()[0]).length, 4);

  Logger.log('finish: test-select');

  Logger.log('start: test-filter');

  GSUnit.assertEquals('Check = (Number)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age = 20').result().length, 10);

  GSUnit.assertEquals('Check = (Boolean)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('married = true').result().length, 15);

  GSUnit.assertEquals('Check = (String)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('company = Adobe').result().length, 6);

  GSUnit.assertEquals('Check < (Number)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age < 20').result().length, 10);

  GSUnit.assertEquals('Check <= (Number)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age <= 20').result().length, 20);

  GSUnit.assertEquals('Check > (Number)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age > 20').result().length, 10);

  GSUnit.assertEquals('Check >= (Number)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age >= 20').result().length, 20);

  GSUnit.assertEquals('Check IN (Number)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age IN 19,20').result().length, 20);

  GSUnit.assertArrayEquals('Check IN (Number)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age IN 19,20').result(), open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('age = 19 OR age = 20').result());

  GSUnit.assertEquals('Check IN (String)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('company IN Apple,Google').result().length, 12);

  GSUnit.assertArrayEquals('Check IN (String)', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('company IN Apple,Google').result(), open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('company = Apple OR company = Google').result());

  GSUnit.assertArrayEquals('Check OR', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('name = Judith OR name = Nola').result(), [{
    name: 'Judith',
    age: 19,
    married: false,
    company: 'Adobe'
  }, {
    name: 'Nola',
    age: 21,
    married: true,
    company: 'Yahoo'
  }]);

  GSUnit.assertEquals('Check AND', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('company = Adobe AND married = true').result().length, 3);

  GSUnit.assertArrayEquals('Check All Column One Object', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).filter('name = Branden').result(), [{
    name: 'Branden',
    age: 19,
    married: false,
    company: 'Google'
  }]);

  Logger.log('finish: test-filter');

  Logger.log('start: test-orderBy');

  GSUnit.assertArrayEquals('Check orderBy', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).orderBy(['name'], true).result(), open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).orderBy(['name'], false).result().reverse());

  GSUnit.assertArrayEquals('Check orderBy', open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).orderBy(['name', 'age'], true).result(), open(SPREADSHEET_ID_, 'test-select').select(['name', 'age', 'married', 'company']).orderBy(['name', 'age'], false).result().reverse());

  Logger.log('finish: test-orderBy');
}

function testInsert_() {
  Logger.log('start: test-insert');

  var preCount = open(SPREADSHEET_ID_, 'test-other').select(['name', 'age', 'married', 'company']).result().length;
  var insertDatas = [{
    name: 'John',
    age: 20,
    married: true,
    company: 'Apple'
  }, {
    name: 'Smith',
    age: 24,
    married: false
  }];

  open(SPREADSHEET_ID_, 'test-other').insertRows(insertDatas);

  GSUnit.assertEquals('Check Inserted Data Length', open(SPREADSHEET_ID_, 'test-other').select(['name', 'age', 'married', 'company']).result().length, preCount + insertDatas.length);

  Logger.log('finish: test-insert');
}

function testDelete_() {
  Logger.log('start: test-delete');

  open(SPREADSHEET_ID_, 'test-other').deleteRows();

  GSUnit.assertEquals('Check All Deleted Data Length', open(SPREADSHEET_ID_, 'test-other').select(['name', 'age', 'married', 'company']).result().length, 0);

  var insertDatas = [{
    name: 'John',
    age: 20,
    married: true,
    company: 'Apple'
  }, {
    name: 'Smith',
    age: 24,
    married: false,
    company: 'Google'
  }, {
    name: 'Lila',
    age: 30,
    married: true,
    company: 'Microsoft'
  }];
  open(SPREADSHEET_ID_, 'test-other').insertRows(insertDatas);

  open(SPREADSHEET_ID_, 'test-other').deleteRows('name = John');

  GSUnit.assertEquals('Check Deleteed Data Length', open(SPREADSHEET_ID_, 'test-other').select(['name', 'age', 'married', 'company']).result().length, insertDatas.length - 1);

  open(SPREADSHEET_ID_, 'test-other').deleteRows();
  open(SPREADSHEET_ID_, 'test-other').deleteRows();

  Logger.log('finish: test-delete');
}

function testUpdate_() {
  Logger.log('start: test-update');

  open(SPREADSHEET_ID_, 'test-other').deleteRows();

  var insertDatas = [{
    name: 'John',
    age: 20,
    married: true,
    company: 'Apple'
  }, {
    name: 'Smith',
    age: 24,
    married: false,
    company: 'Google'
  }, {
    name: 'Lila',
    age: 30,
    married: true,
    company: 'Microsoft'
  }];
  open(SPREADSHEET_ID_, 'test-other').insertRows(insertDatas);

  open(SPREADSHEET_ID_, 'test-other').updateRows({
    married: true
  }, 'name = Smith');

  GSUnit.assertEquals('Check One Updated Data Length', open(SPREADSHEET_ID_, 'test-other').select(['name', 'age', 'married', 'company']).filter('married = true').result().length, 3);

  open(SPREADSHEET_ID_, 'test-other').updateRows({
    married: false
  });

  GSUnit.assertEquals('Check All Updated Data Length', open(SPREADSHEET_ID_, 'test-other').select(['name', 'age', 'married', 'company']).filter('married = false').result().length, 3);

  Logger.log('finish: test-update');
}