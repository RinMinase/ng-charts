import "../../assets/chartjs-chart-financial.min";
import "chartjs-adapter-luxon";

import { Component, ViewChild } from "@angular/core";
import {
    ChartOptions,
    ChartColor,
    BaseChartDirective,
} from "@rinminase/ng-charts";
import { DateTime } from "luxon";

@Component({
    selector: "app-financial-chart",
    templateUrl: "./financial-chart.component.html",
})
export class FinancialChartComponent {
    barCount = 60;
    initialDateStr = "01 Apr 2017 00:00 Z";

    finChartData = [
        {
            label: "Financial Chart",
            data: this.getRandomData(this.initialDateStr, this.barCount),
            barThickness: 10,
        },
    ];

    finChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            display: false,
        },
        plugins: {
            datalabels: {
                display: false,
            },
        },
    };

    finChartColors: ChartColor = [
        {
            borderColor: "black",
            backgroundColor: "rgba(255,0,0,0.3)",
        },
    ];

    finChartLegend = true;
    finChartType = "candlestick";
    finChartPlugins = [];

    @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

    randomBar(date: DateTime, lastClose: number): RandomFinancialData {
        const rndNum = (min: number, max: number) => {
            return Math.round(Math.random() * (max - min) + min);
        };

        const open = rndNum(lastClose * 0.95, lastClose * 1.05);
        const close = rndNum(open * 0.95, open * 1.05);
        const high = rndNum(Math.max(open, close), Math.max(open, close) * 1.1);
        const low = rndNum(Math.min(open, close) * 0.9, Math.min(open, close));

        return {
            t: date,
            o: open,
            h: high,
            l: low,
            c: close,
        };
    }

    getRandomData(dateStr: string, count: number): RandomFinancialData[] {
        let date = DateTime.fromRFC2822(dateStr);
        const data = [this.randomBar(date, 30)];

        while (data.length < count) {
            date = date.plus({ days: 1 });

            if (date.weekday <= 5) {
                data.push(this.randomBar(date, data[data.length - 1].c));
            }
        }

        return data;
    }

    toggleChartType(): void {
        this.finChartType =
            this.finChartType === "candlestick" ? "ohlc" : "candlestick";
    }
}

export class RandomFinancialData {
    c: number;
    t: DateTime;
    h: number;
    l: number;
    o: number;
}
