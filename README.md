<h1 align="center"> Angular Chart.js </h1>

<p align="center">
    <a href="https://circleci.com/gh/RinMinase/ng-charts">
        <img alt="Circle-CI" src="https://img.shields.io/circleci/build/github/RinMinase/ng-charts/master.svg?logo=circleci&style=for-the-badge">
    </a>&nbsp;
    <a href="https://semantic-release.gitbook.io/semantic-release/">
        <img alt="Semantic-Release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge">
    </a>
</p>
<p align="center">
    <a href="https://bundlephobia.com/result?p=@rinminase/ng-charts">
        <img alt="Bundle-Phobia" src="https://img.shields.io/bundlephobia/minzip/@rinminase/ng-charts?logo=webpack&logoColor=white&style=for-the-badge">
    </a>&nbsp;
    <a href="https://www.npmjs.com/package/@rinminase/ng-charts">
        <img alt="NPM-DM" src="https://img.shields.io/npm/dm/@rinminase/ng-charts?logo=npm&style=for-the-badge">
    </a>
</p>

## Introduction

Beautiful charts for Angular based on ng2-chartjs.

This library is updated for usage with Angular 9 and removes chart.js as a peer dependency.

## Version Information

| Version             | Chart.js Version | Branch |
| ------------------- | ---------------- | ------ |
| `4.x`               | 2.9              | master |
| `5.x` _(beta/next)_ | 3.5              | dev    |

## Usage & Demo

### Installation

1. You can install ***ng-charts*** using npm

  ```bash
  npm install @rinminase/ng-charts
  ```

  For Chart.js version 3.5+

  ```bash
  npm install @rinminase/ng-charts@next
  ```

### Using a CDN

1. You can use [JSDelivr](https://www.jsdelivr.com/) CDN and place it on your main HTML page

If you're using **Chart.js version 2.9**
```html
  <body>
    ...
    <script src="https://cdn.jsdelivr.net/npm/@rinminase/ng-charts"></script>
  </body>
```

If you're using **Chart.js version 3.5+**
```html
  <body>
    ...
    <script src="https://cdn.jsdelivr.net/npm/@rinminase/ng-charts@next"></script>
  </body>
```
_Please note that version 5 of this package is still currently in beta and has not been thoroughly tested_

### Stackblitz Starting Templates

* [Line Chart](https://stackblitz.com/edit/ng-charts-line)
* [Pie Chart](https://stackblitz.com/edit/ng-charts-pie)
* [Bar Chart](https://stackblitz.com/edit/ng-charts-bar)
* [Doughnut Chart](https://stackblitz.com/edit/ng-charts-doughnut)
* [Radar Chart](https://stackblitz.com/edit/ng-charts-radar)
* [Polar Area Chart](https://stackblitz.com/edit/ng-charts-polar-area)
* [Bubble Chart](https://stackblitz.com/edit/ng-charts-bubble)
* [Scatter Chart](https://stackblitz.com/edit/ng-charts-scatter)

## API

### Import
```typescript
import { ChartsModule } from '@rinminase/ng-charts';

// In your App's module:
imports: [
   ChartsModule
]
```

### Chart types
There are one directive for all chart types: `baseChart`, and there are 8 types of charts: `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`, `bubble` and `scatter`.

### Properties

**Note**: For more information about possible options please refer to original [chart.js](http://www.chartjs.org/docs) documentation

- `data` (`SingleOrMultiDataSet`) - set of points of the chart, it should be `MultiDataSet` only for `line`, `bar`, `radar` and `doughnut`, otherwise `SingleDataSet`
- `datasets` (`ChartDatasets[]`) - `data` see about, the `label` for the dataset which appears in the legend and tooltips
- `labels` (`ChartLabel[]`) - x axis labels. It's necessary for charts: `line`, `bar` and `radar`. And just labels (on hover) for charts: `polarArea`, `pie` and `doughnut`. `Label` is either a single `string`, or it may be a `string[]` representing a multi-line label where each array element is on a new line.
- `chartType` (`ChartType`) - indicates the type of charts, it can be: `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`
- `options` (`ChartOptions`) - chart options (as from [Chart.js documentation](http://www.chartjs.org/docs/))
- `colors` (`Color | DatasetColor[]`) - data colors **per dataset** will use default and|or random colors if not specified (see below)
- `legend`: (`boolean = false`) - if true show legend below the chart, otherwise not be shown

**Note** Pie charts only contain one dataset unlike other charts, as such `colors` are formatted as such:

```typescript
data = [10, 20, 30];
colors = [{
    backgroundColor: ["red", "#0F0", "rgba(41, 182, 246,0.75)"],
    borderColor: ["rgb(250,120,100)", "green", "#0086c3"],
}];
```

### Events

- `chartClick`: fires when click on a chart has occurred, returns information regarding active points and labels
- `chartHover`: fires when mousemove (hover) on a chart has occurred, returns information regarding active points and labels


### Colors

There are a set several default colors. Colors can be replaced using the `colors` attribute. If there is more data than colors, colors are generated randomly.

### Dynamic Theming

The `ChartsModule` provides a service called `ThemeService` which allows clients to set a structure specifying colors override settings. This service may be called when the dynamic theme changes, with colors which fit the theme. The structure is interpreted as an override, with special functionality when dealing with arrays. Example:

```typescript
type Theme = 'light-theme' | 'dark-theme';

private _selectedTheme: Theme = 'light-theme';
public get selectedTheme() {
  return this._selectedTheme;
}

public set selectedTheme(value) {
  this._selectedTheme = value;
  let overrides: ChartOptions;
  if (this.selectedTheme === 'dark-theme') {
    overrides = {
      legend: {
        labels: { fontColor: 'white' }
      },
      scales: {
        xAxes: [{
          ticks: { fontColor: 'white' },
          gridLines: { color: 'rgba(255,255,255,0.1)' }
        }],
        yAxes: [{
          ticks: { fontColor: 'white' },
          gridLines: { color: 'rgba(255,255,255,0.1)' }
        }]
      }
    };
  } else {
    overrides = {};
  }
  this.themeService.setColorschemesOptions(overrides);
}

constructor(private themeService: ThemeService) { }

setCurrentTheme(theme: Theme) {
  this.selectedTheme = theme;
}
```

The `overrides` object has the same type as the chart options object `ChartOptions`, and wherever a simple field is encountered it replaces the matching field in the `options` object. When an array is encountered (as in the `xAxes` and `yAxes` fields above), the single object inside the array is used as a template to override all array elements in the matching field in the `options` object. So in the case above, every axis will have its ticks and gridline colors changed.

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/RinMinase/ng-charts/issues) board to report bugs and feature requests.
2. Please **always** write steps to reproduce the error.

Thanks for understanding!

## FAQ

### Why re-create this library when there is already an existing one at [ng2-charts](https://github.com/valor-software/ng2-charts) created by Valor Software?

- The library doesn't seem to remove chart.js as its peer dependency, but needs it a lot. I seem to see the need to remove the additional library installed for your project and have this library install it instead

  Instead of:

  ```npm install ng2-chartjs chart.js```

  I wanted to do it this way:

  ```npm install @rinminase/ng-charts```

  Which only adds one dependency to your project.

### Will this library be updated when either ng2-charts or chart.js updates?

- Yes. This is alongside with its other peer dependencies (angular and zonejs)

## Built with
* <img width=20 height=20 src="https://angular.io/assets/images/favicons/favicon.ico"> [Angular 12](https://angular.io/) - Library setup
* <img width=20 height=20 src="https://www.typescriptlang.org/favicon-32x32.png"> [TypeScript](https://www.typescriptlang.org/) - Language syntax
* <img width=20 height=20 src="https://nodejs.org/static/images/favicons/favicon-32x32.png"> [NodeJS](https://nodejs.org/) - Environment
* <img width=20 height=20 src="https://dmmj3mmt94rvw.cloudfront.net/favicon-undefined.ico"> [Circle CI](https://circleci.com/) - Continuous Integration (CI) service
* <img width=20 height=20 src="https://gblobscdn.gitbook.com/spaces%2F-LGsE7zdvzHI5cG-XV6p%2Favatar.png"> [Semantic Release📦🚀](https://semantic-release.gitbook.io/) - Releasing strategy
