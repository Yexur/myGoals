import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeklyGoalsPage } from './weekly-goals';

@NgModule({
  declarations: [
    WeeklyGoalsPage,
  ],
  imports: [
    IonicPageModule.forChild(WeeklyGoalsPage),
  ],
})
export class WeeklyGoalsPageModule {}
