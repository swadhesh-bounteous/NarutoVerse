import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { CharactersapiService } from './charactersapi.service';
import { Character, CharactersData } from '../models/character_types';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  error$: Observable<string | null> = this.errorSubject.asObservable();

  private defaultCharacters: CharactersData = {
    characters: [],
    currentPage: 0,
    pageSize: 0,
    totalCharacters: 0,
  };

  constructor(private charactersApiService: CharactersapiService) {}

  getCharacters(page: number, limit: number): Observable<CharactersData> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    return this.charactersApiService.getCharacters(page, limit).pipe(
      tap((data) => {
        console.log('API Response:', data); // Verify this log to see the response
      }),
      catchError((error) => {
        this.errorSubject.next('Failed to fetch characters.');
        console.error('Error fetching characters:', error);
        return of(this.defaultCharacters); 
      }),
      finalize(() => this.loadingSubject.next(false)) 
    );
  }
}
