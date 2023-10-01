import { pipe, flow } from 'fp-ts/function';
import O from 'fp-ts/Option';
import { gte, prop } from 'ramda';
import { Player } from 'player';

import { createDeck } from './deck';
import { Game } from './type';

export type noIdGame = Omit<Game, 'id'>;

interface CreateGame {
  (users: Player[]): O.Option<noIdGame>;
}

export const createGame: CreateGame = (users) =>
  pipe(
    users,
    O.fromPredicate(
      flow(
        //
        prop('length'),
        (length) => gte(length)(2), // length >= 2
      ),
    ),
    O.bindTo('players'),
    O.apS('rounds', O.some([])),
    O.apS('deck', O.some(createDeck())),
  );
