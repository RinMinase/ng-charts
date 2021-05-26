import { Component } from "@angular/core";

import { AppService } from "@app/app.service";

@Component({
    selector: "app-radar-chart",
    templateUrl: "./radar-chart.component.html",
})
export class RadarChartComponent {
    chartOptions = {
        responsive: true,
    };

    chartLabels = [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
    ];

    chartData = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" },
    ];

    constructor(private service: AppService) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        this.chartData[0].data = this.service.randomize(this.chartData[0].data);
    }
}
