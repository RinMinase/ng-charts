import { Component } from "@angular/core";
import * as chartlabels from "chartjs-plugin-datalabels";

// import { AppService } from "@app/app.service";

@Component({
    selector: "app-doughnut-chart",
    templateUrl: "./doughnut-chart.component.html",
})
export class DoughnutChartComponent {
    chartPlugins = [chartlabels];
    chartLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    chartData = [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
    ];

    constructor(/*private service: AppService*/) {}

    // Disregard this function, as this just randomizes the values in an array
    randomizer(): void {
        // WIP
    }
}
