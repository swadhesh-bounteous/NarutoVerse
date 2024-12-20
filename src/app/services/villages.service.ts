// src/app/services/villages.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VillageData } from '../models/village_types';

@Injectable({
  providedIn: 'root',
})
export class VillagesService {
  private apiUrl = 'https://narutodb.xyz/api/village'; 

  constructor(private http: HttpClient) {}

  getVillages(): Observable<VillageData> {
    return this.http.get<VillageData>(this.apiUrl);
  }
}
