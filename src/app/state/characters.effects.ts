import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CharactersapiService } from '../services/charactersapi.service';
import {
  fetchCharacters,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from './characters.actions';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactersApi: CharactersapiService,
  ) {}

  fetchCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCharacters),
      mergeMap(({ page, limit }) =>
        this.charactersApi.getCharacters(page, limit).pipe(
          map((charactersData) => fetchCharactersSuccess({ charactersData })),
          catchError((error) => {
            return of(
              fetchCharactersFailure({ error: 'Failed to fetch characters' }),
            );
          }),
        ),
      ),
    ),
  );
}
