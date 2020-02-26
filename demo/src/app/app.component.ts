import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar color="primary">
      <i class="material-icons c-pointer">menu</i>
      <span class="c-pointer ml-1">Angular Charts</span>
      <span style="flex: 1 1 auto;"></span>
    </mat-toolbar>

    <mat-sidenav-container class="container">
      <mat-sidenav opened mode="side" class="sidenav">
        <mat-list>
          <mat-list-item
            *ngFor="let item of nav"
            class="c-pointer"
            (click)="setActiveList(item.name)"
            [ngClass]="{ 'active-item': active === item.name }"
          >
            <span>{{ item.title }}</span>
          </mat-list-item>
          <mat-divider class="logout-divider"></mat-divider>
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
        <app-line-chart *ngIf="active === 'Line'"></app-line-chart>
        <app-bar-chart *ngIf="active === 'Bar'"></app-bar-chart>
        <app-doughnut-chart *ngIf="active === 'Doughnut'"></app-doughnut-chart>
        <app-radar-chart *ngIf="active === 'Radar'"></app-radar-chart>
        <app-pie-chart *ngIf="active === 'Pie'"></app-pie-chart>
        <app-polar-chart *ngIf="active === 'Polar'"></app-polar-chart>
        <app-bubble-chart *ngIf="active === 'Bubble'"></app-bubble-chart>
        <app-scatter-chart *ngIf="active === 'Scatter'"></app-scatter-chart>
        <app-dynamic-chart *ngIf="active === 'Dynamic'"></app-dynamic-chart>
        <app-financial-chart *ngIf="active === 'Finance'"></app-financial-chart>
        <app-about *ngIf="active === 'About'"></app-about>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    ".container { min-height: calc(100vh - 64px) }",
    ".sidenav { width: 200px }",
    ".content { padding: 20px 20px }",
    ".active-item { background-color: #43A047; color: #FFF }",
    ".logout-menu { position: absolute; bottom: 0 }",
    ".logout-divider { position: absolute; bottom: 48px; width: 100% }",
  ],
})
export class AppComponent implements OnInit {
  active: string = "Install";

  nav: Array<{ name: string; title: string; component?: any }> = [
    {
      name: "Install",
      title: "Installation",
    },
    {
      name: "Line",
      title: "Line Chart",
    },
    {
      name: "Bar",
      title: "Bar Chart",
    },
    {
      name: "Doughnut",
      title: "Doughnut Chart",
    },
    {
      name: "Radar",
      title: "Radar Chart",
    },
    {
      name: "Pie",
      title: "Pie Chart",
    },
    {
      name: "Polar",
      title: "Polar Area Chart",
    },
    {
      name: "Bubble",
      title: "Bubble Chart",
    },
    {
      name: "Scatter",
      title: "Scatter Chart",
    },
    {
      name: "Dynamic",
      title: "Dynamic Chart",
    },
    {
      name: "Finance",
      title: "Financial Chart",
    },
  ];

  ngOnInit() {}

  setActiveList(item: string) {
    console.log(item);
    this.active = item;
  }
}
