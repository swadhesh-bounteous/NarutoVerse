import { Component, inject, OnInit } from '@angular/core';
import { VillagesService } from '../../services/villages.service';
import { Village } from '../../models/village_types';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-villages',
  standalone: false,
  templateUrl: './villages.component.html',
  styleUrl: './villages.component.scss',
})
export class VillagesComponent implements OnInit {
  villages: Village[] = [];
  villagesService = inject(VillagesService);
  filterText: string = '';
  isLoading: boolean = true;
  filterTextControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.filterTextControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((filterText) => {
        this.filterText = filterText ?? '';
      });
    this.villagesService.getVillages().subscribe({
      next: (data) => {
        this.villages = data.villages;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching villages data:', error);
        this.isLoading = false;
      },
    });
  }
}
