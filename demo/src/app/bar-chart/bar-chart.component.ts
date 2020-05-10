import { Component } from "@angular/core";
import { ChartOptions, ChartDataSets } from "chart.js";
import { Label } from "@rinminase/ng-charts";

import { AppService } from "@app/app.service";

@Component({
    selector: "app-bar-chart",
    templateUrl: "./bar-chart.component.html",
})
export class BarChartComponent {
    chartOptions: ChartOptions = {
        responsive: true,
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
            datalabels: {
                anchor: "end",
                align: "end",
            },
        },
    };
    chartLabels: Label[] = [
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
    ];
    chartLegend = true;
    chartPlugins = [];
    chartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    ];

    constructor(private service: AppService) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        this.chartData[0].data = this.service.randomize(this.chartData[0].data);
    }
}
