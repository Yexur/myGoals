import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyGoalsPage } from './daily-goals';

@NgModule({
  declarations: [
    DailyGoalsPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyGoalsPage),
  ],
})
export class DailyGoalsPageModule {}
