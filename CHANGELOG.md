# Changelog

## 3.0.0
* Fixed main dependency version of demo project (3893f7a)
* Updated angular dependencies of demo project (e9dd499)
* Updated sub-dependencies (d29d157)
* Updated typescript dependency (2b6e164)
* Updated angular dependency (959552a)

** BREAKING 💥 **
* `Color` imports from `@rinminase/ng-charts`  is now an array of `DatasetColor` or `DatasetColor[ ]`
  * This was due to the possible confusion on using Pie Chart's `[color]` property. (#3)
  * The `Color` type means color **per dataset** (pie charts only contain one set of data)
