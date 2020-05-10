import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartDataSets } from "chart.js";
import { Label } from "@rinminase/ng-charts";
import * as chartlabels from "chartjs-plugin-datalabels";

@Component({
    selector: "app-bar-chart",
    templateUrl: "./bar-chart.component.html",
})
export class BarChartComponent implements OnInit {
    options: ChartOptions = {
        responsive: true,
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
            datalabels: {
                anchor: "end",
                align: "end",
            },
        },
    };
    labels: Label[] = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"];
    plugins = [chartlabels];
    data: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    ];

    constructor() {}

    ngOnInit(): void {}

    randomizer(): void {
        const randomize = (): number => Math.round(Math.random() * 100);
        const data = [randomize(), 59, 80, randomize(), 56, randomize(), 40];
        this.data[0].data = data;
    }
}
