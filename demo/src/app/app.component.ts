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
            class="c-pointer"
            (click)="setActiveList('Line')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Line' }"
          >
            <span>Line Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Bar')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Bar' }"
          >
            <span>Bar Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Doughnut')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Doughnut' }"
          >
            <span>Doughnut Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Radar')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Radar' }"
          >
            <span>Radar Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Pie')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Pie' }"
          >
            <span>Pie Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Polar')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Polar' }"
          >
            <span>Polar Area Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Bubble')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Bubble' }"
          >
            <span>Bubble Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Scatter')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Scatter' }"
          >
            <span>Scatter Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Dynamic')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Dynamic' }"
          >
            <span>Dynamic Chart</span>
          </mat-list-item>
          <mat-list-item
            class="c-pointer"
            (click)="setActiveList('Finance')"
            [ngClass]="{ 'active-list-item': currActiveList === 'Finance' }"
          >
            <span>Financial Chart</span>
          </mat-list-item>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <span>Content</span>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    ".sidenav { width: 200px }",
    ".container { min-height: calc(100vh - 64px) }",
    ".content { padding: 20px 20px }",
    ".active-list-item { background-color: #43A047; color: #FFF }",
  ],
})
export class AppComponent implements OnInit {
  currActiveList: string = "Bar";

  ngOnInit() {}

  setActiveList(item: string) {
    this.currActiveList = item;
  }
}
