import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar color="primary">
      <i class="material-icons c-pointer">menu</i>
      <span class="c-pointer ml-1">Angular Charts</span>
      <span style="flex: 1 1 auto;"></span>
      <a
        href="https://github.com/RinMinase/ng-charts"
        mat-raised-button
        color="accent"
        target="_blank"
        rel="noopener"
      >
        <i class="material-icons mr">code</i>
        <span>Source Code</span>
      </a>
    </mat-toolbar>

    <mat-sidenav-container class="container">
      <mat-sidenav opened mode="side" class="sidenav">
        <mat-list class="sidenav-list">
          <mat-list-item
            *ngFor="let item of nav"
            class="c-pointer"
            (click)="setActiveList(item.name)"
            [ngClass]="{ 'active-item': active === item.name, div: item.div }"
          >
            <i class="material-icons mr" *ngIf="item.icon">{{ item.icon }}</i>
            <span>{{ item.title }}</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer logout-menu"
            (click)="setActiveList('About')"
            [ngClass]="{ 'active-item': active == 'About' }"
          >
            <i class="material-icons mr">info</i>
            <span>About</span>
          </mat-list-item>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <app-installation *ngIf="active === 'Install'"></app-installation>
        <app-container *ngIf="active === 'Line'" type="line">
          <app-line-chart></app-line-chart>
        </app-container>
        <app-container *ngIf="active === 'Bar'" type="bar">
          <app-bar-chart></app-bar-chart>
        </app-container>
        <app-container *ngIf="active === 'Doughnut'" type="doughnut">
          <app-doughnut-chart></app-doughnut-chart>
        </app-container>
        <app-container *ngIf="active === 'Radar'" type="radar">
          <app-radar-chart></app-radar-chart>
        </app-container>
        <app-container *ngIf="active === 'Pie'" type="pie">
          <app-pie-chart></app-pie-chart>
        </app-container>
        <app-container *ngIf="active === 'Polar'" type="polar">
          <app-polar-chart></app-polar-chart>
        </app-container>
        <app-container *ngIf="active === 'Bubble'" type="bubble">
          <app-bubble-chart></app-bubble-chart>
        </app-container>
        <app-container *ngIf="active === 'Scatter'" type="scatter">
          <app-scatter-chart></app-scatter-chart>
        </app-container>
        <app-container *ngIf="active === 'Dynamic'" type="dynamic">
          <app-dynamic-chart></app-dynamic-chart>
        </app-container>
        <app-container *ngIf="active === 'Finance'" type="finance">
          <app-financial-chart></app-financial-chart>
        </app-container>
        <app-about *ngIf="active === 'About'"></app-about>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .container {
        min-height: calc(100vh - 64px);
      }
      .sidenav {
        width: 200px;
      }
      .sidenav-list {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;
      }
      .content {
        padding: 20px 20px;
      }
      .active-item {
        background-color: #43a047;
        color: #fff;
      }
      .div {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      }
      .logout-menu {
        margin-top: auto;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  active: string = "Install";

  nav: Array<{ name: string; title: string; icon?: string; div?: boolean }> = [
    { name: "Install", title: "Installation", icon: "extension", div: true },
    { name: "Line", title: "Line Chart" },
    { name: "Bar", title: "Bar Chart" },
    { name: "Doughnut", title: "Doughnut Chart" },
    { name: "Radar", title: "Radar Chart" },
    { name: "Pie", title: "Pie Chart" },
    { name: "Polar", title: "Polar Area Chart" },
    { name: "Bubble", title: "Bubble Chart" },
    { name: "Scatter", title: "Scatter Chart" },
    { name: "Dynamic", title: "Dynamic Chart" },
    { name: "Finance", title: "Financial Chart" },
  ];

  ngOnInit() {}

  setActiveList(item: string) {
    this.active = item;
  }
}
