import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterdetailsapiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError((err) => {
        console.error(`API GET Error for ${url}:`, err);
        return throwError(() => err);
      })
    );
  }
}
