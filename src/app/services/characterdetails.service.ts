import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Character } from '../models/character_types';
import { CharacterdetailsapiService } from './characterdetailsapi.service'; // Import the new API service

@Injectable({
  providedIn: 'root',
})
export class CharacterdetailsService {
  private apiUrl = 'https://narutodb.xyz/api/character';

  private defaultCharacterData: Character = {
    id: '',
    name: 'No character available',
    images: [],
  };

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  error$: Observable<string | null> = this.errorSubject.asObservable();

  constructor(private characterApiService: CharacterdetailsapiService) {}

  getCharacterDetails(id: string): Observable<Character> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    return this.characterApiService.get<Character>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadingSubject.next(true)),
      catchError((error) => {
        this.errorSubject.next('Failed to fetch character details.');
        return of(this.defaultCharacterData);
      }),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
