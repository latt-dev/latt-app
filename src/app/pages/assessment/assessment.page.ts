import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'latt-assessment',
  template: `
    <ion-content class="ion-padding">
      <h2>Lets Check Your Knowledge Level!</h2>
      <h3>...</h3>
      <ion-button shape="round" (click)="finishAssessment()">Finish Assessment</ion-button>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentPage {
  constructor(private auth: AuthService) {}

  finishAssessment() {
    // TODO check results and filter user (student) courses by failed questions [...]
    // - for failed courses property optional is set to false
    // (by default it's true)
    this.auth.onboard();
  }
}
