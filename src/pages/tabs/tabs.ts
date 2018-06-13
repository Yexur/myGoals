import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    homeTabRoot = HomePage;
    dailyTabRoot = 'DailyGoalsPage';
    weeklyTabRoot = 'WeeklyGoalsPage';
    monthlyTabRoot = 'MonthlyGoalsPage';
    otherTabRoot = 'OtherGoalsPage';

    constructor() {

    }
}
