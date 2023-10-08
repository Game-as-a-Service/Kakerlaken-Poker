import { pipe } from 'fp-ts/function';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import L from 'monocle-ts/Lens';
import { match } from 'ts-pattern';
import { shuffle } from 'lib/shuffle';
import { always, prop } from 'ramda';
import { Player } from 'player';

import { Game } from './type';

export interface DealCards {
  (game: Game): Game;
}

const shuffleDeck = pipe(
  //
  L.id<Game>(), // identity
  L.prop('deck'),
  L.modify(shuffle),
);

const getPlayerHasCardOfCount = (playerCounts: number) =>
  match(playerCounts)
    .with(2, always(32))
    .with(3, always(21))
    .with(4, always(16))
    .with(5, always(12))
    .with(6, always(10))
    .otherwise(always(0));

// (modifyFn: (xs: Player[]) => Player[]) => (s: Game) => Game
const modifyPlayerOfGame = (modifyFn: (xs: Player[]) => Player[]) =>
  pipe(
    //
    L.id<Game>(),
    L.prop('players'),
    L.modify(modifyFn),
  );

const dealCardsToPlayer = pipe(
  L.id<Game>(),
  L.modify((game) => {
    const chunksOfDeck = pipe(
      game,
      prop('deck'),
      A.chunksOf(getPlayerHasCardOfCount(game.players.length)),
    );

    return pipe(
      game,
      modifyPlayerOfGame(
        A.mapWithIndex<Player, Player>((idx, player) => ({
          ...player,
          hands: pipe(
            //
            chunksOfDeck,
            A.lookup(idx),
            O.getOrElse(always([])),
          ),
        })),
      ),
    );
  }),
);

export const dealCards: DealCards = (game) =>
  pipe(
    //
    game,
    shuffleDeck,
    dealCardsToPlayer,
  );
