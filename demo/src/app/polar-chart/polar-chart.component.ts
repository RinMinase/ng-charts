import { Component } from "@angular/core";

import { AppService } from "@app/app.service";

@Component({
    selector: "app-polar-chart",
    templateUrl: "./polar-chart.component.html",
})
export class PolarChartComponent {
    chartLabels = [
        "Download Sales",
        "In-Store Sales",
        "Mail Sales",
        "Telesales",
        "Corporate Sales",
    ];

    chartData = [300, 500, 100, 40, 120];
    chartLegend = true;

    constructor(private service: AppService) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        this.chartData = this.service.randomize(this.chartData);
    }
}
