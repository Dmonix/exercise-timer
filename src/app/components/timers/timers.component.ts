import { Component, TemplateRef } from '@angular/core';
import { Timer } from '../../models/timer';
import { TimersService } from '../../services/timers.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timers.component.html',
  styleUrl: './timers.component.css'
})
export class TimersComponent {
  public timers: Timer[] = [];
  public newTimer: Timer = new Timer('123', 'Sample', 15);

  constructor(private timersService: TimersService, private router: Router, private modalService: NgbModal){
    this.getTimers();
  }

  ngOnit(): void {
  }

  getTimers(){
    this.timersService.getTimers()
    .subscribe(timers => {
      console.log('Fetched timers successfully');
      this.timers = timers;
    });
  }

  viewTimer(id: string){
    console.log(`Clicked on ${id}`);
    this.router.navigate([`/timer/${id}`]);
  }

  open(content: TemplateRef<any>){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'}).result
    .then(
      (result) => {
        console.log(result);
      }
    )
  }
}
