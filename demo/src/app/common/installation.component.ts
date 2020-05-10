import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-installation",
  template: `
    <div>
      <h1 class="mat-display-1 mt-1 mb-2">Angular Chart.js</h1>

      <ng-container *ngFor="let badge of badges">
        <p class="text-center">
          <ng-container *ngFor="let item of badge">
            <span [ngClass]="{ 'pr-2': item }">
              <a [href]="item.link"><img [src]="item.badge" /></a>
            </span>
          </ng-container>
        </p>
      </ng-container>
    </div>
  `,
  styles: [``],
})
export class InstallationComponent implements OnInit {
  baseBadgeURL: string = "https://img.shields.io/";
  badgeFormat: string = "style=for-the-badge";
  badges: Array<Array<{ link: string; badge: string; spacer?: boolean }>> = [
    [
      {
        badge: `${this.baseBadgeURL}circleci/build/github/RinMinase/ng-charts/master.svg?logo=circleci&${this.badgeFormat}`,
        link: "https://circleci.com/gh/RinMinase/ng-charts",
        spacer: true,
      },
      {
        badge: `${this.baseBadgeURL}badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?${this.badgeFormat}`,
        link: "https://semantic-release.gitbook.io/semantic-release",
      },
    ],
    [
      {
        badge: `${this.baseBadgeURL}bundlephobia/minzip/@rinminase/ng-charts?logo=webpack&logoColor=white&${this.badgeFormat}`,
        link: "https://bundlephobia.com/result?p=@rinminase/ng-charts",
        spacer: true,
      },
      {
        badge: `${this.baseBadgeURL}npm/dw/@rinminase/ng-charts?logo=npm&${this.badgeFormat}`,
        link: "https://www.npmjs.com/package/@rinminase/ng-charts",
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
