import { Component } from "@angular/core";

@Component({
    selector: "app-doughnut-chart",
    templateUrl: "./doughnut-chart.component.html",
})
export class DoughnutChartComponent {
    chartLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    chartData = [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
    ];

    constructor() {}
}
