import { Component } from "@angular/core";

import { AppService } from "@app/app.service";

@Component({
    selector: "app-pie-chart",
    templateUrl: "./pie-chart.component.html",
})
export class PieChartComponent {
    chartOptions = {
        responsive: true,
    };

    chartLabels = [
        ["Download", "Sales"],
        ["In", "Store", "Sales"],
        "Mail Sales",
    ];

    chartData = [300, 500, 100];

    chartColors = [
        {
            backgroundColor: ["red", "#0F0", "rgba(41, 182, 246,0.75)"],
            borderColor: ["rgb(250,120,100)", "green", "#0086c3"],
        },
    ];

    chartLegend = true;
    chartPlugins = [];

    constructor(private service: AppService) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        this.chartData = this.service.randomize(this.chartData);
    }
}
