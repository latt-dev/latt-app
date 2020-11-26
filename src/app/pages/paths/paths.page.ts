import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'latt-paths',
  template: `
    <ion-content class="ion-padding">
      <h2>Choose a path to learn new skills:</h2>
      <ion-button shape="round" (click)="choosePath()">
        <img src="/assets/icons/angular.svg" alt="Angular" />
        <span class="button-text">Angular</span>
      </ion-button>
      <ion-button shape="round" (click)="choosePath()">React</ion-button>
    </ion-content>
  `,
  styles: [
    `
      .button-text {
        padding-left: 0.5em;
      }
    `,
  ],
})
export class PathsPage {
  constructor(private router: Router) {}

  choosePath() {
    // TODO this method should incorporate some kind of path choosing functionality actually [...]
    // - add path (with id) to User data
    // - get list of courses for the chosen path and pre-populate the corresponding User field
    // - get list of questions for the chosen path and pass it to assessment module
    this.router.navigate(['assessment']);
  }
}
