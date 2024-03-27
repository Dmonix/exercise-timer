import { Component } from '@angular/core';
import { TimersService } from '../../services/timers.service';
import { Timer } from '../../models/timer';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location, NgIf } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  timer?: Timer;

  constructor(private timersService: TimersService, private activatedRoute: ActivatedRoute, private location: Location){}

  ngOnInit(){
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.timersService.getTimer(id)
      .subscribe(timer => this.timer = timer);
  }

  updateTimer(){
    console.log(`Updating timer: ${this.timer?.id}`);
    let result = this.timersService.updateTimer(this.timer);
    if(result){
      this.location.back();
    }
  }
}
