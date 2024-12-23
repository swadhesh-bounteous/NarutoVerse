
import { createReducer, on } from '@ngrx/store';
import {
  fetchCharacters,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from './characters.actions';
import { Character, CharactersData } from '../models/character_types';

export interface CharactersState {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
  isLoading: boolean;
  error: string | null;
}

export const initialState: CharactersState = {
  characters: [],
  currentPage: 1,
  pageSize: 20,
  totalCharacters: 0,
  isLoading: false,
  error: null,
};

export const charactersReducer = createReducer(
  initialState,
  on(fetchCharacters, (state) => ({ ...state, isLoading: true, error: null })),
  on(fetchCharactersSuccess, (state, { charactersData }) => ({
    ...state,
    isLoading: false,
    pageSize: charactersData.pageSize,
    currentPage: charactersData.currentPage,
    characters: [...state.characters, ...charactersData.characters], // Assuming charactersData contains an array of characters
    totalCharacters: charactersData.totalCharacters, // Assuming totalCharacters is part of the API response
  })),
  
  on(fetchCharactersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);