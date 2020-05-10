import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HighlightModule } from "ngx-highlightjs";

import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";

import { ChartsModule } from "@rinminase/ng-charts";
import { AppComponent } from "./app.component";

import { AboutComponent } from "./common/about.component";
import { ContainerComponent } from "./common/container.component";
import { InstallationComponent } from "./common/installation.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { BubbleChartComponent } from "./bubble-chart/bubble-chart.component";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";
import { DynamicChartComponent } from "./dynamic-chart/dynamic-chart.component";
import { FinancialChartComponent } from "./financial-chart/financial-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { PolarChartComponent } from "./polar-chart/polar-chart.component";
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { ScatterChartComponent } from "./scatter-chart/scatter-chart.component";

@NgModule({
    declarations: [
        AppComponent,

        AboutComponent,
        ContainerComponent,
        InstallationComponent,

        BarChartComponent,
        BubbleChartComponent,
        DoughnutChartComponent,
        DynamicChartComponent,
        FinancialChartComponent,
        LineChartComponent,
        PieChartComponent,
        PolarChartComponent,
        RadarChartComponent,
        ScatterChartComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ChartsModule,
        HighlightModule,

        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
