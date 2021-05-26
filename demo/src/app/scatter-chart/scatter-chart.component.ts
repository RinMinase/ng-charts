import { Component } from "@angular/core";
import { ChartDatasets, ChartOptions } from "@rinminase/ng-charts";

import { AppService } from "@app/app.service";

@Component({
    selector: "app-scatter-chart",
    templateUrl: "./scatter-chart.component.html",
})
export class ScatterChartComponent {
    chartOptions: ChartOptions = {
        responsive: true,
    };

    chartData: ChartDatasets = [
        {
            data: [
                { x: 1, y: 1 },
                { x: 2, y: 3 },
                { x: 3, y: -2 },
                { x: 4, y: 4 },
                { x: 5, y: -3 },
            ],
            label: "Series A",
            pointRadius: 10,
        },
    ];

    constructor(private service: AppService) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        this.chartData[0].data = this.service.randomize(
            this.chartData[0].data,
            "scatter",
        );
    }
}
