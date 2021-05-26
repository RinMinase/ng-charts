import { Component } from "@angular/core";
import {
    ChartDatasets,
    ChartLabel,
    ChartOptions,
    ChartType,
} from "@rinminase/ng-charts";

@Component({
    selector: "app-dynamic-chart",
    templateUrl: "./dynamic-chart.component.html",
})
export class DynamicChartComponent {
    dynChartOptions: ChartOptions = {
        responsive: true,

        // Empty structures as placeholders for dynamic theming
        scales: { xAxes: [{}], yAxes: [{}] },
    };

    dynChartLabels: ChartLabel[] = [
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
    ];
    dynChartType: ChartType = "bar";
    dynChartLegend = true;

    dynChartData: ChartDatasets = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    ];

    constructor() {}

    public toggleChartType(): void {
        this.dynChartType = this.dynChartType === "bar" ? "line" : "bar";
    }
}
