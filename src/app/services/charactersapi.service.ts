import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CharactersData } from '../models/character_types';

@Injectable({
  providedIn: 'root'
})
export class CharactersapiService {

  private apiUrl = 'https://narutodb.xyz/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(page: number, limit: number): Observable<CharactersData> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<CharactersData>(this.apiUrl, { params }).pipe(
      catchError((err) => {
        console.error(`API GET Error for ${this.apiUrl}:`, err);
        return throwError(() => err); // Propagate the error
      })
    );
  }
}
