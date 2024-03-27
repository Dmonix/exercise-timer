import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Timer } from '../models/timer';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  private apiUrl = 'https://localhost:7195/api/timers'
  constructor(private http: HttpClient) { }

  getTimers(): Observable<Timer[]>{
    return this.http.get<Timer[]>(this.apiUrl)
    .pipe(
      tap(_ => console.log('Timers fetched'))
    )
  }

  getTimer(id: string): Observable<Timer>{
    return this.http.get<Timer>(`${this.apiUrl}/${id}`)
    .pipe(
      tap(_ => console.log(`Timer ${id} fetched`))
    )
  }

  updateTimer(timer: Timer | undefined): boolean{
    this.http.put(`${this.apiUrl}/${timer?.id}`, timer)
    .subscribe(
      _ => 
      {
        console.log(`Timer ${timer?.id} updated`)
      }, error => {
        return false;
      }
    )
    
    return true;
  }
}
