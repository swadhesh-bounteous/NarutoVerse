import { Component, inject, OnInit } from '@angular/core';
import { VillagesService } from '../../services/villages.service';
import { Village } from '../../models/village_types';

@Component({
  selector: 'app-villages',
  standalone: false,
  templateUrl: './villages.component.html',
  styleUrl: './villages.component.scss',
})
export class VillagesComponent implements OnInit {
  villages: Village[] = [];
  villagesService = inject(VillagesService);
  isLoading: boolean = true;
  
  constructor() {}

  ngOnInit(): void {
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
