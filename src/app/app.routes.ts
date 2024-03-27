import { Routes } from '@angular/router';
import { TimersComponent } from './components/timers/timers.component';
import { TimerComponent } from './components/timer/timer.component';

export const routes: Routes = [
    { path: 'timers', component: TimersComponent },
    { path: 'timer/:id', component: TimerComponent},
    { path: "**", component: TimersComponent }
];
