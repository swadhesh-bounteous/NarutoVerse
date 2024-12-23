
import { createAction, props } from '@ngrx/store';
import { CharactersData } from '../models/character_types';

// Trigger an API call to fetch characters
export const fetchCharacters = createAction(
  '[Characters API] Fetch Characters',
  props<{ page: number; limit: number }>()
);

// Store the fetched characters in the state
export const fetchCharactersSuccess = createAction(
  '[Characters API] Fetch Characters Success',
  props<{ charactersData: CharactersData }>()
);

// Handle fetch error
export const fetchCharactersFailure = createAction(
  '[Characters API] Fetch Characters Failure',
  props<{ error: string }>()
);
