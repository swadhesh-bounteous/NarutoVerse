import { createReducer, on } from '@ngrx/store';
import {
  fetchCharacters,
  fetchCharactersSuccess,
  fetchCharactersFailure,
  setCurrentPage,
} from './characters.actions';
import { Character, CharactersData } from '../models/character_types';

export interface CharactersState {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
  isLoading: boolean;
  error: string | null;
  maxPage: number;
}

export const initialState: CharactersState = {
  characters: [],
  currentPage: 1,
  pageSize: 20,
  totalCharacters: 0,
  isLoading: false,
  error: null,
  maxPage: 1,
};

export const charactersReducer = createReducer(
  initialState,
  on(fetchCharacters, (state) => ({ ...state, isLoading: true, error: null })),
  on(fetchCharactersSuccess, (state, { charactersData }) => ({
    ...state,
    isLoading: false,
    pageSize: charactersData.pageSize,
    currentPage: charactersData.currentPage,
    characters: [...state.characters, ...charactersData.characters],
    totalCharacters: charactersData.totalCharacters,
    maxPage: Math.max(charactersData.currentPage, state.maxPage),
  })),

  on(fetchCharactersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(setCurrentPage, (state, { currentPage }) => ({
    ...state,
    currentPage,
  })),
);
