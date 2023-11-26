import { flow, pipe } from 'fp-ts/function';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import L from 'monocle-ts/Lens';
import { Card } from 'card';
import { Game } from 'game';
import { allPass, anyPass, prop } from 'remeda';
import { Round, SelectedPlayerState } from 'round';
import { P, match } from 'ts-pattern';
import { always } from 'utils/fp';
import { lookupWithNegativeIndex } from 'lib/lookupWithNegativeNumber';

import { Player } from './type';

interface CurrentPlayerSelectUnrevealedCard {
  (game: Game): (player: Player) => (selectedCard: Card) => O.Option<Round>;
}

const checkPlayerIsCurrentPlayer = (player: Player) => (game: Game) =>
  pipe(
    game,
    prop('rounds'),
    A.last,
    O.map(prop('currentPlayer')),
    O.map(prop('id')),
    O.map((id) => id === player.id),
    O.getOrElse(always(false)),
  );

const isFirstRound = (game: Game) =>
  pipe(
    //
    game,
    prop('rounds'),
    A.size,
    (size) => size === 1,
  );

const checkPlayerHasTheCard = (player: Player) => (selectedCard: Card) =>
  pipe(
    //
    player,
    prop('hands'),
    A.some((card) => card.id === selectedCard.id),
  );

const checkSelectCardIsAllowed = (selectedCard: Card) => (game: Game) =>
  pipe(
    //
    game,
    prop('rounds'),
    lookupWithNegativeIndex(-2),
    O.map((round) =>
      match(round)
        .with(
          P.union(
            {
              state: SelectedPlayerState.GUESS_CARD_WIN,
            },
            {
              state: SelectedPlayerState.GUESS_CARD_LOSS,
            },
            {
              state: SelectedPlayerState.EVADE_NOT_LOOK_CARD,
              selectedCard: {
                id: selectedCard.id,
              },
            },
            {
              state: SelectedPlayerState.EVADE_LOOK_CARD,
              selectedCard: {
                id: selectedCard.id,
              },
            },
          ),
          always(true),
        )
        .otherwise(always(false)),
    ),
    O.getOrElse(always(false)),
  );

const setCardToRound = (selectedCard: Card) =>
  pipe(
    //
    L.id<Round>(),
    L.prop('selectedCard'),
    L.modify(always(selectedCard)),
  );

export const currentPlayerSelectUnrevealedCard: CurrentPlayerSelectUnrevealedCard =
  (game) => (player) => (selectedCard) =>
    pipe(
      //
      game,
      O.fromPredicate(
        flow(
          allPass([
            checkPlayerIsCurrentPlayer(player),
            always(checkPlayerHasTheCard(player)(selectedCard)),
            anyPass([
              // 第一回合可以選任何牌
              isFirstRound,
              // 第二回合之後只能視規則選牌
              checkSelectCardIsAllowed(selectedCard),
            ]),
          ]),
        ),
      ),
      O.map(prop('rounds')),
      O.chain(A.last),
      O.map(setCardToRound(selectedCard)),
    );
