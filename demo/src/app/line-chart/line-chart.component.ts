import { Component } from "@angular/core";
import { ChartOptions, ChartDataSets } from "chart.js";
import { Color, Label } from "@rinminase/ng-charts";
import * as chartlabels from "chartjs-plugin-datalabels";

import { AppService } from "@app/app.service";

@Component({
    selector: "app-line-chart",
    templateUrl: "./line-chart.component.html",
})
export class LineChartComponent {
    chartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
        {
            data: [180, 480, 770, 90, 1000, 270, 400],
            label: "Series C",
            yAxisID: "y-axis-1",
        },
    ];
    chartLabels: Label[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];
    chartOptions: ChartOptions & { annotation: any } = {
        responsive: false,
        scales: {
            xAxes: [{}],
            yAxes: [
                {
                    id: "y-axis-0",
                    position: "left",
                },
                {
                    id: "y-axis-1",
                    position: "right",
                    gridLines: {
                        color: "rgba(255,0,0,0.3)",
                    },
                    ticks: {
                        fontColor: "red",
                    },
                },
            ],
        },
        annotation: {
            annotations: [
                {
                    type: "line",
                    mode: "vertical",
                    scaleID: "x-axis-0",
                    value: "March",
                    borderColor: "orange",
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        fontColor: "orange",
                        content: "LineAnno",
                    },
                },
            ],
        },
    };
    chartColors: Color[] = [
        {
            // gray
            backgroundColor: "rgba(148,159,177,0.2)",
            borderColor: "rgba(148,159,177,1)",
            pointBackgroundColor: "rgba(148,159,177,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(148,159,177,0.8)",
        },
        {
            // dark grey
            backgroundColor: "rgba(77,83,96,0.2)",
            borderColor: "rgba(77,83,96,1)",
            pointBackgroundColor: "rgba(77,83,96,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(77,83,96,1)",
        },
        {
            // red
            backgroundColor: "rgba(255,0,0,0.3)",
            borderColor: "red",
            pointBackgroundColor: "rgba(148,159,177,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(148,159,177,0.8)",
        },
    ];
    chartLegend = true;
    chartPlugins = [chartlabels];

    constructor(private service: AppService) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        this.chartData[0].data = this.service.randomize(this.chartData[0].data);
    }
}
