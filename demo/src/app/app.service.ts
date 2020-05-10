import { Injectable } from "@angular/core";
import { ChartPoint } from "chart.js";

@Injectable({ providedIn: "root" })
export class AppService {
    constructor() {}

    public randomize(values: Array<number> | Array<ChartPoint>): Array<number> {
        const returnValue = [];
        values.forEach(() => {
            returnValue.push(Math.round(Math.random() * 100));
        });

        return returnValue;
    }
}
