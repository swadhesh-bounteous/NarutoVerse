
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState } from './characters.reducer';

export const selectCharactersState = createFeatureSelector<CharactersState>('characters');

export const selectCharacters = createSelector(
  selectCharactersState,
  (state) => state.characters
);

export const selectTotalCharacters = createSelector(
  selectCharactersState,
  (state) => state.totalCharacters
);

export const selectIsLoading = createSelector(
  selectCharactersState,
  (state) => state.isLoading
);

export const selectError = createSelector(
  selectCharactersState,
  (state) => state.error
);