import { Game } from 'game';
import { pipe } from 'fp-ts/function';
import { prop } from 'remeda';
import { ReadonlyNonEmptyArray } from 'fp-ts/ReadonlyNonEmptyArray';
import { Player } from 'player';
import A from 'fp-ts/Array';
import Random from 'fp-ts/Random';
import O from 'fp-ts/Option';
import { always } from 'utils/fp';

import { OmitIdRound, SelectedPlayerState } from './type';

interface CreateRound {
  (game: Game): OmitIdRound;
}

export const createRound: CreateRound = (game) =>
  pipe(
    //
    game,
    prop('rounds'),
    A.last,
    O.match(
      always({
        currentPlayer: pipe(
          game.players as unknown as ReadonlyNonEmptyArray<Player>,
          Random.randomElem,
        )(),
        selectedPlayer: null,
        state: SelectedPlayerState.NONE,
      }),
      (prevRound) => ({
        currentPlayer:
          prevRound.state === SelectedPlayerState.GUESS_CARD_WIN
            ? prevRound.currentPlayer
            : prevRound.selectedPlayer,
        selectedPlayer: null,
        state: SelectedPlayerState.NONE,
      }),
    ),
  );
