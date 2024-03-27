import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Exercise } from '../models/exercise';
import { Segment } from '../models/segment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://localhost:7195/api/exercises '

  constructor(private http: HttpClient) { }

  getExercises(): Observable<Exercise[]>{
    return this.http.get<Exercise[]>(this.apiUrl)
    .pipe(
      tap(_ => console.log('Exercises fetched'))
    )
  }
  
  getExercise(id: string): Observable<Exercise>{
    return this.http.get<Exercise>(`${this.apiUrl}/${id}`)
    .pipe(
      tap(exercise => console.log(`Exercise: ${exercise.name} fetched successfully`))
    )
  }

  addSegment(exerciseId: string, newSegment: Segment): Observable<Segment>{
    return this.http.post<Segment>(`${this.apiUrl}/${exerciseId}`, newSegment)
    .pipe(
      tap(seg => console.log(`Segment ${seg.description} added successfully`))
    )
  }
}
