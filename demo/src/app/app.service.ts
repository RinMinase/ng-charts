import { Injectable } from "@angular/core";
import { ChartPoint } from "chart.js";

@Injectable({ providedIn: "root" })
export class AppService {
    constructor() {}

    public randomize(
        values: Array<number | null | undefined | number[]> | ChartPoint[],
        specialChart?: string,
    ): Array<number> {
        const returnValue = [];

        if (!specialChart) {
            values.forEach(() => {
                returnValue.push(Math.round(Math.random() * 100));
            });
        } else if (specialChart === "bubble") {
            values.forEach(() => {
                returnValue.push({
                    x: Math.round(Math.random() * 30),
                    y: Math.round(Math.random() * 30),
                    r: Math.round(Math.random() * 50),
                });
            });
        } else if (specialChart === "scatter") {
            const rndPosNeg = () => Math.round(Math.random()) * 2 - 1;

            values.forEach(() => {
                returnValue.push({
                    x: Math.round(Math.random() * 10 * rndPosNeg()),
                    y: Math.round(Math.random() * 10 * rndPosNeg()),
                });
            });
        }

        return returnValue;
    }
}
