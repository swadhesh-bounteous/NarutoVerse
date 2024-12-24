import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Character } from '../../models/character_types';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  selectTotalCharacters,
  selectIsLoading,
  selectError,
  getMaxPage,
  getCharactersFromLocal,
} from '../../state/characters.selectors';
import {
  fetchCharacters,
  setCurrentPage,
} from '../../state/characters.actions';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  animations:[
    trigger('buttonState',[
      state('normal', style({
        transform: 'scale(1)',
        backgroundColor: 'rgb(121, 98, 83)'
      })),
      state('hovered', style({
        transform: 'scale(1.1)',
        backgroundColor: 'rgb(70, 56, 46)'
      })),
      transition('normal <=> hovered', animate('300ms ease-in-out'))
    ])
  ]
})
export class CharactersComponent implements OnInit, OnDestroy {
  totalCharacters$: Observable<number>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  currentPage: number = 1;
  limit: number = 20;
  maxPage: number = -1;
  filterText: string= '';
  private maxPageSubscription!: Subscription;
  characters: Character[] = [];
  buttonState: string = 'normal';

  onMouseEnter(){
    this.buttonState = 'hovered';
  }
  onMouseLeave(){
    this.buttonState = 'normal';
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {
    this.totalCharacters$ = this.store.pipe(select(selectTotalCharacters));
    this.isLoading$ = this.store.pipe(select(selectIsLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  ngOnInit(): void {
    this.loadPageData(this.currentPage);
    this.maxPageSubscription = this.store
      .pipe(select(getMaxPage))
      .subscribe((page) => {
        this.maxPage = page;
        console.log('Max page:', this.maxPage); 
      });
  }

  ngOnDestroy(): void {
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

}
