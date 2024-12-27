import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState } from './characters.reducer';

export const selectCharactersState =
  createFeatureSelector<CharactersState>('characters');

export const selectTotalCharacters = createSelector(
  selectCharactersState,
  (state) => state.totalCharacters,
);

export const selectIsLoading = createSelector(
  selectCharactersState,
  (state) => state.isLoading,
);

export const selectError = createSelector(
  selectCharactersState,
  (state) => state.error,
);

export const getMaxPage = createSelector(
  selectCharactersState,
  (state) => state.maxPage,
);

export const getCharactersFromLocal = (page: number) => {
  return createSelector(selectCharactersState, (state) => {
    const startIndex = (page - 1) * state.pageSize;
    const endIndex = startIndex + state.pageSize;
    return state.characters.slice(startIndex, endIndex);
  });
};
