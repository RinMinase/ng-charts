import { Component } from "@angular/core";
import { ChartDatasets, ChartOptions } from "@rinminase/ng-charts";

import { AppService } from "@app/app.service";

@Component({
    selector: "app-bubble-chart",
    templateUrl: "./bubble-chart.component.html",
})
export class BubbleChartComponent {
    chartOptions: ChartOptions = {
        responsive: true,
        scales: {
            xAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 30,
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 30,
                    },
                },
            ],
        },
    };

    chartLegend = true;

    chartData: ChartDatasets = [
        {
            data: [
                { x: 10, y: 10, r: 10 },
                { x: 15, y: 5, r: 15 },
                { x: 26, y: 12, r: 23 },
                { x: 7, y: 8, r: 8 },
            ],
            label: "Series A",
        },
    ];

    constructor(private service: AppService) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        this.chartData[0].data = this.service.randomize(
            this.chartData[0].data,
            "bubble",
        );
    }
}
