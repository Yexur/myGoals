import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthlyGoalsPage } from './monthly-goals';

@NgModule({
  declarations: [
    MonthlyGoalsPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthlyGoalsPage),
  ],
})
export class MonthlyGoalsPageModule {}
