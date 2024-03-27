import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-timer-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-timer-form.component.html',
  styleUrl: './new-timer-form.component.css'
})
export class NewTimerFormComponent {
}
