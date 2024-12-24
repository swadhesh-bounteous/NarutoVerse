import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Character } from '../../models/character_types';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  selectCharacters,
  selectTotalCharacters,
  selectIsLoading,
  selectError,
  getMaxPage,
  selectCharactersForPage,
  getCharactersFromLocal,
} from '../../state/characters.selectors';
import {
  fetchCharacters,
  setCurrentPage,
} from '../../state/characters.actions';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  // characters$: Observable<Character[]>;
  totalCharacters$: Observable<number>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  currentPage: number = 1;
  limit: number = 20;
  maxPage: number = -1;
  private maxPageSubscription!: Subscription;
  characters: Character[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {
    // this.characters$ = this.store.pipe(select(selectCharacters));
    this.totalCharacters$ = this.store.pipe(select(selectTotalCharacters));
    this.isLoading$ = this.store.pipe(select(selectIsLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  ngOnInit(): void {
    this.loadPageData(this.currentPage);
    // Subscribe to the maxPage observable
    this.maxPageSubscription = this.store
      .pipe(select(getMaxPage))
      .subscribe((page) => {
        this.maxPage = page;
        console.log('Max page:', this.maxPage); // For debugging
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from maxPageSubscription to prevent memory leaks
    if (this.maxPageSubscription) {
      this.maxPageSubscription.unsubscribe();
    }
  }

  loadPageData(page: number): void {
    if (this.currentPage > this.maxPage) {
      this.store.dispatch(fetchCharacters({ page, limit: this.limit }));
    }

    this.store.dispatch(setCurrentPage({ currentPage: this.currentPage }));
    this.store
      .select(getCharactersFromLocal(this.currentPage))
      .subscribe((characters) => {
        console.log('Characters from local:', characters);
        this.characters = characters;
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex+1;
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
      const totalPages = Math.ceil(
        (this.totalCharacters$ as unknown as number) / this.limit
      );
      this.paginator.lastPage();
      this.loadPageData(totalPages - 1);
    }
  }
}
