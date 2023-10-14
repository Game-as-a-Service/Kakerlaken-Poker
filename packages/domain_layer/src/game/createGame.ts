import { pipe, flow } from 'fp-ts/function';
import Random from 'fp-ts/Random';
import O from 'fp-ts/Option';
import { allPass, prop } from 'remeda';
import { Player } from 'player';
import { gte, lte } from 'utils/fp';

import { createDeck } from './deck';
import { OmitIdGame, Game } from './type';

interface CreateGame {
  (players: Player[]): O.Option<OmitIdGame>;
}

const checkPlayerCount = (count: number) => allPass(count, [gte(2), lte(6)]);

export const createGame: CreateGame = (players) =>
  pipe(
    players,
    O.fromPredicate(
      flow(
        //
        prop('length'),
        checkPlayerCount,
      ),
    ),
    O.bindTo('players'),
    O.apS('rounds', O.some([])),
    O.apS('deck', O.some(createDeck())),
  );
export const createIdToGame = (game: O.Option<OmitIdGame>): O.Option<Game> =>
  pipe(
    game,
    O.map((game) => ({ ...game, id: Random.randomInt(1, 1000)().toString() })),
  );
