import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentPage } from './assessment.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmentPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AssessmentPage],
})
export class AssessmentPageModule {}
