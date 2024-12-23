import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Character } from '../../models/character_types';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  selectCharacters,
  selectTotalCharacters,
  selectIsLoading,
  selectError,
} from '../../state/characters.selectors';
import { fetchCharacters } from '../../state/characters.actions';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Character[]>;
  totalCharacters$: Observable<number>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  currentPage: number = 1;
  limit: number = 20;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {
    this.characters$ = this.store.pipe(select(selectCharacters));
    this.totalCharacters$ = this.store.pipe(select(selectTotalCharacters));
    this.isLoading$ = this.store.pipe(select(selectIsLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  ngOnInit(): void {
    this.loadPageData(this.currentPage);
  }

  loadPageData(page: number): void {
    this.store.dispatch(fetchCharacters({ page, limit: this.limit }));
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.limit = event.pageSize;
    this.loadPageData(this.currentPage);
  }

  goToFirstPage(): void {
    if (this.paginator) {
      this.paginator.firstPage();
      this.loadPageData(0);
    }
  }

  goToLastPage(): void {
    if (this.paginator) {
      const totalPages = Math.ceil(this.totalCharacters$ as unknown as number / this.limit);
      this.paginator.lastPage();
      this.loadPageData(totalPages - 1);
    }
  }
}