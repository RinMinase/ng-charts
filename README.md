<h1 align="center"> Angular Chart.js (ng-chart.js) </h1>

### Beautiful charts for Angular2 based on ng2-chartjs. This library is updated for usage with Angular 9 and removes chart.js as a peer dependency.

# Usage & Demo


## Installation

1. You can install ***ng2-charts*** using npm

  ```bash
  npm install ng2-charts
  ```

## Stackblitz Starting Templates

* [Line Chart](https://stackblitz.com/edit/ng2-charts-line-template)
* [Pie Chart](https://stackblitz.com/edit/ng2-charts-pie-template)
* [Bar Chart](https://stackblitz.com/edit/ng2-charts-bar-template)
* [Doughnut Chart](https://stackblitz.com/edit/ng2-charts-doughnut-template)
* [Radar Chart](https://stackblitz.com/edit/ng2-charts-radar-template)
* [Polar Area Chart](https://stackblitz.com/edit/ng2-charts-polar-area-template)
* [Bubble Chart](https://stackblitz.com/edit/ng2-charts-bubble-template)
* [Scatter Chart](https://stackblitz.com/edit/ng2-charts-scatter-template)

## API

### Import
```typescript
import { ChartsModule } from 'ng2-charts';

// In your App's module:
imports: [
   ChartsModule
]
```

### Chart types
There are one directive for all chart types: `baseChart`, and there are 8 types of charts: `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`, `bubble` and `scatter`.

### Properties

**Note**: For more information about possible options please refer to original [chart.js](http://www.chartjs.org/docs) documentation

- `data` (`SingleOrMultiDataSet`) -  set of points of the chart, it should be `MultiDataSet` only for `line`, `bar`, `radar` and `doughnut`, otherwise `SingleDataSet`
- `datasets` (`{ data: SingleDataSet, label: string }[]`) - `data` see about, the `label` for the dataset which appears in the legend and tooltips
- `labels` (`Label[]`) - x axis labels. It's necessary for charts: `line`, `bar` and `radar`. And just labels (on hover) for charts: `polarArea`, `pie` and `doughnut`. `Label` is either a single `string`, or it may be a `string[]` representing a multi-line label where each array element is on a new line.
- `chartType` (`ChartType`) - indicates the type of charts, it can be: `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`
- `options` (`ChartOptions`) - chart options (as from [Chart.js documentation](http://www.chartjs.org/docs/))
- `colors` (`Color[]`) - data colors, will use default and|or random colors if not specified (see below)
- `legend`: (`boolean = false`) - if true show legend below the chart, otherwise not be shown

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

1. Use [GitHub Issues](https://github.com/RinMinase/ng-chart.js/issues) board to report bugs and feature requests.
2. Please **always** write steps to reproduce the error.

Thanks for understanding!

## FAQ

### Why re-create this library when there is already an existing one at [ng2-charts](https://github.com/valor-software/ng2-charts) created by Valor Software?

- The library doesn't seem to remove chart.js as its peer dependency, but needs it a lot. I seem to see the need to remove the additional library installed for your project and have this library install it instead

  Instead of:

  ```npm install ng2-chartjs chart.js```

  I wanted to do it this way:

  ```npm install ng-chart.js```

  Which only adds one dependency to your project.

### Will this library be updated when either ng2-charts or chart.js updates?

- Yes. This is alongside with its other peer dependencies (angular and zonejs)