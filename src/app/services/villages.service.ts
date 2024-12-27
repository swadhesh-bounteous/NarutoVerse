import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { VillageData } from '../models/village_types';
import { VillageapiService } from './villageapi.service';

@Injectable({
  providedIn: 'root',
})
export class VillagesService {
  private apiUrl = 'https://narutodb.xyz/api/village?page=1&limit=40';

  private defaultVillageData: VillageData = {
    villages: [],
    currentPage: 0,
    pageSize: 0,
    totalVillages: 0,
  };

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  error$: Observable<string | null> = this.errorSubject.asObservable();

  constructor(private villageApiService: VillageapiService) {}

  getVillages(): Observable<VillageData> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);
    return this.villageApiService.get<VillageData>(this.apiUrl).pipe(
      tap(() => this.loadingSubject.next(true)),
      catchError(() => {
        return of(this.defaultVillageData);
      }),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
