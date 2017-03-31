# SpreadSheetsSQL

SpreadSheetsSQL is GoogleAppsScript Library.  
If you use GoogleSpreadSheets as the database on GoogleAppsScript, can be written in Like SQL.

# Installation

Project ID: `MAoZrMsylZMiNUMljU4QtRHEMpGMKinCk`  
Resources > Libraries... > Input Project ID `MAoZrMsylZMiNUMljU4QtRHEMpGMKinCk` in Find a Library > Select


# Usase

GoogleSpreadSheets as the database  
Like [this GoogleSpreadSheets](https://docs.google.com/spreadsheets/d/10NljB1tiNZ_1SE4zgiaQv-ATZ-DhWtC9BIK4pGm-g6g/pubhtml?gid=0&single=true)

Write the column names in the first row.  
Write the data in second ~ n rows.

Available Data Types: `Number`, `String`, `Boolean`

# Example

### Create SpreadSheetsSQL Instance

```
var id = 'SpreadSheets ID';
var name = 'SpreadSheets SheetName';

SpreadSheetsSQL.open(id, name)
```

### Get row

```
SpreadSheetsSQL.open(id, name).select(['name', 'age', 'married', 'company']).result();
```

#### Result (json array)

```
[{
  name: 'Gail',
  age: 20,
  married: true,
  company: 'Google'
},{
  name: 'Plato',
  age: 18,
  married: false,
  company: 'Yahoo'
}]
```

### Get row options(filter,orderBy)

```
SpreadSheetsSQL.open(id, name).select(xxx).filter('age < 20').result();
SpreadSheetsSQL.open(id, name).select(xxx).orderBy(['name', 'age']).result();
SpreadSheetsSQL.open(id, name).select(xxx).filter(xxx).orderBy(xxx).result();
```

#### Available symbols

| Symbol | Example                             |
|:------:|-------------------------------------|
|    =   | age = 20                            |
|    <   | age < 20                            |
|   <=   | age <= 20                           |
|    >   | age > 20                            |
|   >=   | age >= 20                           |
|   IN   | company IN Apple,Google             |
|   OR   | company = Apple OR company = Google |
|   AND  | company = Apple AND age > 20        |

### Insert rows

```
SpreadSheetsSQL.open(id, name).insertRows([
  {name: 'Colt', age: 30, married: false, company: 'Microsoft'},
  {name: 'Smith', age: 24, married: true, company: 'Adobe'}
]);
```

### Update rows

```
SpreadSheetsSQL.open(id, name).updateRows({
  company = 'Adobe'
}, 'name = Colt');
```

### Delete rows

```
SpreadSheetsSQL.open(id, name).deleteRows('name = Colt AND company = Adobe');
```

### Resize sheet

```
SpreadSheetsSQL.open(id, name).resizeToFit();
```

# Document

Look at [Detail Document](https://script.google.com/macros/library/d/17p1ghyOkbWOhdE4bdBFhOXL079I-yt5xd0LAi00Zs5N-bUzpQtN7iT1a/9)

# License

```
Copyright 2016-2017 Kaoru Tsutsumishita

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
