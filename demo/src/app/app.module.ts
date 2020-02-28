import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";

import { AboutComponent } from "./about.component";
import { InstallationComponent } from "./installation.component";
import { BarChartComponent } from "./bar-chart.component";
import { BubbleChartComponent } from "./bubble-chart.component";
import { DoughnutChartComponent } from "./doughnut-chart.component";
import { DynamicChartComponent } from "./dynamic-chart.component";
import { FinancialChartComponent } from "./financial-chart.component";
import { LineChartComponent } from "./line-chart.component";
import { PieChartComponent } from "./pie-chart.component";
import { PolarChartComponent } from "./polar-chart.component";
import { RadarChartComponent } from "./radar-chart.component";
import { ScatterChartComponent } from "./scatter-chart.component";

@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
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

    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
