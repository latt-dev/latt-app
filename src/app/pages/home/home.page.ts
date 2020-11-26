import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay, filter, map, tap } from 'rxjs/operators';

import { AuthService } from '../../auth/auth.service';
import { isPresent } from '../../utils/is-present';
import { BehaviorSubject } from 'rxjs';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'latt-home',
  template: `
    <ion-content class="ion-padding">
      <ion-grid style="height: 100%;">
        <ion-row class="ion-justify-content-center ion-align-items-center" style="height: 100%;">
          <ng-container *ngIf="loaded$ | async; else splashScreen">
            <div style="text-align: center">
              <h2 class="hero-text">Distill Your Career</h2>
              <section class="hero-image ion-padding">
                <img src="/assets/images/hero-sign-in.svg" alt="Welcome" />
              </section>
              <ion-button shape="round" (click)="auth.googleSignIn()">
                <img src="/assets/icons/google-sign-in-icon.svg" alt="Google Sign In" />
                <div class="sign-in-text">Sign In With Google</div>
              </ion-button>
            </div>
          </ng-container>
        </ion-row>
      </ion-grid>
    </ion-content>

    <ng-template #splashScreen>
      <latt-synthetic-splash-screen class="splash"></latt-synthetic-splash-screen>
    </ng-template>
  `,
  styles: [
    `
      .hero-text {
        /*font-family: 'Noto Sans Bold', sans-serif;*/
        text-align: center;
        font-size: 2em;
        color: var(--latt-header-gray);
      }
      .hero-image {
        padding: 2em 0 6em;
      }
      .sign-in-text {
        padding-left: 0.5em;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements AfterViewInit {
  loaded$ = new BehaviorSubject(false);

  constructor(public auth: AuthService, private router: Router, private animationCtrl: AnimationController) {
    this.auth.user$.pipe(filter(isPresent)).subscribe((user) => {
      if (user.hasOwnProperty('isOnBoard') && !user.isOnBoard) {
        this.router.navigate(['onboarding']);
      } else {
        this.router.navigate(['courses']);
      }
    });
  }

  ngAfterViewInit() {
    this.animationCtrl
      .create()
      .addElement(document.querySelector('.splash'))
      .delay(750)
      .duration(500)
      .fromTo('opacity', '1', '0')
      .play()
      .then(() => this.loaded$.next(true));
  }
}
