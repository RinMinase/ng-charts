import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-container",
  template: `
    <div>
      <h1 class="mat-display-1 mt-1 mb-2">{{ heading }}</h1>
      <div><ng-content></ng-content></div>
      <div style="min-height: 300px;">
        <mat-tab-group>
          <mat-tab label="Markup">
            <pre><code [highlight]="html"></code></pre>
          </mat-tab>
          <mat-tab label="TypeScript">
            <pre><code [highlight]="ts"></code></pre>
          </mat-tab>
        </mat-tab-group>
      </div>
    </div>
  `,
})
export class ContainerComponent implements OnInit {
  @Input() type: string;

  html: string;
  ts: string;
  heading: string;

  ngOnInit(): void {
    if (charts[this.type]) {
      console.log("type", this.type);
      this.heading = charts[this.type].heading;
      this.html = charts[this.type].html.default;
      this.ts = charts[this.type].ts.default;

      console.log(this.html);
      console.log(this.ts);
    }
  }
}

export const charts = {
  line: {
    heading: "Line Chart",
    ts: require("!!raw-loader!../line-chart/line-chart.component.ts"),
    html: require("!!raw-loader!../line-chart/line-chart.component.html"),
  },
  bar: {
    heading: "Bar Chart",
    ts: require("!!raw-loader!../bar-chart/bar-chart.component.ts"),
    html: require("!!raw-loader!../bar-chart/bar-chart.component.html"),
  },
  doughnut: {
    heading: "Doughnut Chart",
    ts: require("!!raw-loader!../doughnut-chart/doughnut-chart.component.ts"),
    html: require("!!raw-loader!../doughnut-chart/doughnut-chart.component.html"),
  },
  radar: {
    heading: "Radar Chart",
    ts: require("!!raw-loader!../radar-chart/radar-chart.component.ts"),
    html: require("!!raw-loader!../radar-chart/radar-chart.component.html"),
  },
  pie: {
    heading: "Pie Chart",
    ts: require("!!raw-loader!../pie-chart/pie-chart.component.ts"),
    html: require("!!raw-loader!../pie-chart/pie-chart.component.html"),
  },
  polar: {
    heading: "Polar Area Chart",
    ts: require("!!raw-loader!../polar-chart/polar-chart.component.ts"),
    html: require("!!raw-loader!../polar-chart/polar-chart.component.html"),
  },
  bubble: {
    heading: "Bubble Chart",
    ts: require("!!raw-loader!../bubble-chart/bubble-chart.component.ts"),
    html: require("!!raw-loader!../bubble-chart/bubble-chart.component.html"),
  },
  scatter: {
    heading: "Scatter Chart",
    ts: require("!!raw-loader!../scatter-chart/scatter-chart.component.ts"),
    html: require("!!raw-loader!../scatter-chart/scatter-chart.component.html"),
  },
  dynamic: {
    heading: "Dynamic Chart",
    ts: require("!!raw-loader!../dynamic-chart/dynamic-chart.component.ts"),
    html: require("!!raw-loader!../dynamic-chart/dynamic-chart.component.html"),
  },
  finance: {
    heading: "Financial Chart",
    ts: require("!!raw-loader!../financial-chart/financial-chart.component.ts"),
    html: require("!!raw-loader!../financial-chart/financial-chart.component.html"),
  },
};
