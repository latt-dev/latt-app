import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'latt-onboarding',
  template: `
    <ion-content class="ion-padding">
      <h2>
        Distilled Path is an application that helps you to get exactly the pieces of learning you need most right now.
        Choose the technology and our assessment system will do the rest.
      </h2>
      <!-- TODO: this first item need to be removed, it's for dev purposes -->
      <ion-button fill="clear" (click)="skipAndGetIn()">Skip</ion-button>
      <ion-button shape="round" [routerLink]="['/paths']">Choose A Path</ion-button>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPage {
  constructor(private auth: AuthService) {}

  skipAndGetIn() {
    this.auth.onboard();
  }
}
