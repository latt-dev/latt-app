import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, PopoverController } from '@ionic/angular';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'latt-profile-popover',
  template: `<ion-button fill="clear" (click)="signOut()">Sign Out</ion-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePopoverComponent {
  constructor(public auth: AuthService, private popoverController: PopoverController) {}

  signOut() {
    this.auth.signOut();
    this.popoverController.dismiss();
  }
}

@NgModule({
  declarations: [ProfilePopoverComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProfilePopoverComponent],
})
export class ProfilePopoverModule {}
