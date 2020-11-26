import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { ProfilePopoverComponent } from '../../ui/profile-popover.component';

enum CourseGroup {
  optional = 'Optional',
  required = 'Required',
}

@Component({
  selector: 'latt-courses',
  template: `
    <ion-toolbar class="page-toolbar">
      <section slot="start" class="page-title">
        <div class="page-title-text">Courses</div>
      </section>
      <section slot="end" class="profile-icon" (click)="openProfileMenu($event)">
        <img class="profile-image" [src]="(auth.user$ | async)?.photoURL" alt="User Profile Image" />
      </section>
    </ion-toolbar>

    <ion-content class="ion-padding">
      <section class="course-types">
        <ion-segment (ionChange)="switchCourseGroup($event)" [value]="courseGroup.required">
          <ion-segment-button [value]="courseGroup.required">
            <ion-label>Required</ion-label>
          </ion-segment-button>
          <ion-segment-button [value]="courseGroup.optional">
            <ion-label>Optional</ion-label>
          </ion-segment-button>
        </ion-segment>
      </section>
      <section *ngIf="displayRequired$ | async">
        <ul>
          <li *ngFor="let course of required$ | async">
            <ion-card>
              <ion-card-header>
                <ion-card-title class="course-name">{{ course.name }}</ion-card-title>
                <ion-card-subtitle>{{
                  course.articles.filter(getFinished).length +
                    course.labs.filter(getFinished).length +
                    ' of ' +
                    course.articles.length +
                    course.labs.length +
                    ' lessons'
                }}</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </li>
        </ul>
      </section>
      <section *ngIf="(displayRequired$ | async) === false">
        <ul>
          <li *ngFor="let course of optional$ | async">
            <ion-card>
              <ion-card-header>
                <ion-card-title class="course-name">{{ course.name }}</ion-card-title>
                <ion-card-subtitle>{{
                  course.articles.filter(getFinished).length +
                    course.labs.filter(getFinished).length +
                    ' of ' +
                    course.articles.length +
                    course.labs.length +
                    ' lessons'
                }}</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </li>
        </ul>
      </section>
    </ion-content>
  `,
  styles: [
    `
      .page-toolbar {
        padding: 1.5em;
      }
      .page-title {
        font-family: 'Noto Sans Bold', sans-serif;
        font-size: 1.5em;
        color: var(--latt-header-black);
      }
      .profile-image {
        border-radius: 50%;
        width: 2em;
        height: 2em;
      }
      .course-types {
        padding: 0 16px;
      }
      .course-name {
        font-size: 1.5em;
      }
    `,
  ],
})
export class CoursesPage {
  courseGroup = CourseGroup;
  displayRequired$ = new BehaviorSubject(true);

  required$ = new BehaviorSubject([
    { name: 'Advanced JavaScript', articles: [{ finished: true }, {}], labs: [{}, { finished: true }, {}] },
    { name: 'TypeScript', articles: [{ finished: true }, {}], labs: [{}, {}, {}] },
    { name: 'RxJS and FRP', articles: [{}], labs: [{}] },
    { name: 'Angular', articles: [{}, { finished: true }, { finished: true }], labs: [{}, { finished: true }] },
  ]);
  optional$ = new BehaviorSubject([
    { name: 'Web Fundamentals', articles: [{}], labs: [{}, {}] },
    { name: 'HTML', articles: [{}, {}, {}, {}], labs: [{}, {}, {}, {}, {}] },
    { name: 'CSS', articles: [{}, {}, {}], labs: [{}] },
    { name: 'JavaScript Basics', articles: [{}, {}], labs: [] },
  ]);

  constructor(public auth: AuthService, private popoverController: PopoverController) {}

  async openProfileMenu(event: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      cssClass: 'my-custom-class',
      event,
      translucent: true,
    });
    return await popover.present();
  }

  switchCourseGroup(event: any) {
    this.displayRequired$.next(event.detail.value === this.courseGroup.required);
  }

  getFinished = (item) => item?.finished;
}
