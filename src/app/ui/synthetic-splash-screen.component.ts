import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'latt-synthetic-splash-screen',
  template: `
    <div class="latt-synthetic-splash-screen">
      <section class="splash-screen-logo"><img src="/assets/logo/logo.png" alt="logo" /></section>
      <h2 class="splash-screen-title">Latt</h2>
    </div>
  `,
  styles: [
    `
      .splash-screen-logo {
        text-align: center;
        padding-bottom: 2em;
      }
      .splash-screen-title {
        color: var(--latt-header-gray);
        font-family: 'Noto Sans Bold', sans-serif;
        text-align: center;
        font-size: 2.5em;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyntheticSplashScreenComponent {}

@NgModule({
  declarations: [SyntheticSplashScreenComponent],
  imports: [CommonModule],
  exports: [SyntheticSplashScreenComponent],
})
export class SyntheticSplashScreenModule {}
