import { createAction, props } from '@ngrx/store';
import { CharactersData } from '../models/character_types';

export const fetchCharacters = createAction(
  '[Characters API] Fetch Characters',
  props<{ page: number; limit: number }>(),
);

export const fetchCharactersSuccess = createAction(
  '[Characters API] Fetch Characters Success',
  props<{ charactersData: CharactersData }>(),
);

export const fetchCharactersFailure = createAction(
  '[Characters API] Fetch Characters Failure',
  props<{ error: string }>(),
);

export const setCurrentPage = createAction(
  '[Charaters API] Set Current Page',
  props<{ currentPage: number }>(),
);
