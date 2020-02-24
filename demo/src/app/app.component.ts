import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar color="primary">
      <i class="material-icons c-pointer">menu</i>
      <span class="c-pointer ml-1">Angular Charts</span>
      <span style="flex: 1 1 auto;"></span>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "demo";
}
