import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../models/character_types';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  totalItems: number = 0;
  currentPage: number = 0; 
  limit: number = 20;
  isLoading: boolean = false;
  error: string = '';
  filterText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.isLoading = true;
    this.charactersService.getCharacters(this.currentPage + 1, this.limit).subscribe({
      next: (data) => {
        this.characters = data.characters || [];
        this.totalItems = data.totalCharacters || 0;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load characters';
        this.isLoading = false;
      },
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex; 
    this.limit = event.pageSize; 
    this.fetchCharacters();
  }

  goToFirstPage(): void {
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  goToLastPage(): void {
    if (this.paginator) {
      this.paginator.lastPage();
    }
  }
}
