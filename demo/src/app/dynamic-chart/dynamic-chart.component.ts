import { Component } from "@angular/core";
import {
    ChartDatasets,
    ChartLabel,
    ChartOptions,
    ChartType,
} from "@rinminase/ng-charts";
import * as chartlabels from "chartjs-plugin-datalabels";

@Component({
    selector: "app-dynamic-chart",
    templateUrl: "./dynamic-chart.component.html",
})
export class DynamicChartComponent {
    chartOptions: ChartOptions = {
        responsive: true,

        // Empty structures as placeholders for dynamic theming
        scales: { xAxes: [{}], yAxes: [{}] },
    };

    chartLabels: ChartLabel[] = [
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
    ];

    chartPlugins = [chartlabels];
    chartType: ChartType = "bar";
    chartLegend = true;

    chartData: ChartDatasets = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    ];

    constructor() {}

    // Disregard this function, as this just toggles the chart type
    public toggleChartType(): void {
        this.chartType = this.chartType === "bar" ? "line" : "bar";
    }
}
