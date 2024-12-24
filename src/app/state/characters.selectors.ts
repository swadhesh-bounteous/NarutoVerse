import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState } from './characters.reducer';

export const selectCharactersState =
  createFeatureSelector<CharactersState>('characters');

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
export const getMaxPage = createSelector(
  selectCharactersState,
  (state)=> state.maxPage);

export const selectCharactersForPage = (page: number, pageSize: number) =>
  createSelector(selectCharactersState, (state) => {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;

    // Check if data for this range exists in the store
    const charactersForPage = state.characters.slice(startIndex, endIndex);

    return {
      characters: charactersForPage,
      isComplete:
        charactersForPage.length === pageSize ||
        endIndex > state.totalCharacters, // Complete if we have enough data or no more available
    };
  });


  export const getCharactersFromLocal = (page: number) => {
    return createSelector(selectCharactersState, (state) => {
      const startIndex = (page-1) * state.pageSize;
      const endIndex = startIndex + state.pageSize;
      return state.characters.slice(startIndex, endIndex);
    });
  };
  
