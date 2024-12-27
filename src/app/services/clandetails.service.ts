import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  Observable,
  of,
  tap,
} from 'rxjs';
import { ClanData } from '../models/clan_types';
import { ClandetailsapiService } from './clandetailsapi.service';

@Injectable({
  providedIn: 'root',
})
export class ClandetailsService {
  private apiUrl = 'https://narutodb.xyz/api/clan?page=1&limit=60';

  private defaultClanData: ClanData = {
    clans: [],
    currentPage: 0,
    pageSize: 0,
    totalClans: 0,
  };

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  error$: Observable<string | null> = this.errorSubject.asObservable();

  constructor(private clanApiService: ClandetailsapiService) {}

  getClans(): Observable<ClanData> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);
    return this.clanApiService.get<ClanData>(this.apiUrl).pipe(
      tap(() => this.loadingSubject.next(true)),
      catchError(() => {
        return of(this.defaultClanData);
      }),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
