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

        const randomizer = (max: number = 100) => {
            return Math.round(Math.random() * max);
        };

        if (specialChart === "bubble") {
            values.forEach(() => {
                returnValue.push({
                    x: randomizer(30),
                    y: randomizer(30),
                    r: randomizer(50),
                });
            });
        } else if (specialChart === "scatter") {
            const rndPosNeg = () => Math.round(Math.random()) * 2 - 1;

            values.forEach(() => {
                returnValue.push({
                    x: randomizer(10) * rndPosNeg(),
                    y: randomizer(10) * rndPosNeg(),
                });
            });
        } else {
            values.forEach(() => {
                returnValue.push(randomizer());
            });
        }

        return returnValue;
    }
}
