import { Component, inject } from '@angular/core';
import { ClandetailsService } from '../../services/clandetails.service';
import { Clan } from '../../models/clan_types';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-clans',
  standalone: false,

  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
})
export class ClansComponent {
  clans: Clan[] = [];
  clansService = inject(ClandetailsService);
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
    this.clansService.getClans().subscribe({
      next: (data) => {
        this.clans = data.clans;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }
}
