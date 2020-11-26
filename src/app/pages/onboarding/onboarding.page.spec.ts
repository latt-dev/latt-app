import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';

import { OnboardingPage } from './onboarding.page';
import { environment } from '../../../environments/environment';

describe('OnboardingPage', () => {
  let component: OnboardingPage;
  let fixture: ComponentFixture<OnboardingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingPage],
      imports: [IonicModule.forRoot(), RouterTestingModule, AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
