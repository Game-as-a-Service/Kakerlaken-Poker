import { Creature, Status } from 'card';
import { createIdToPlayer, createPlayer } from 'player';
import { pipe } from 'fp-ts/function';
import O from 'fp-ts/Option';

import { checkPlayerHasUnrevealedCardOfHands } from './checkPlayerHasUnrevealedCardOfHands';

describe('checkPlayerHasUnrevealedCardOfHands', () => {
  it(`
    given a player
      hands [
        { id: 1, status: 'UNREVEALED', creature: 'BAT' }
      ]
    when check player has unrevealed card
    then
      player has unrevealedCard
  `, () => {
    const hasUnrevealedCard = pipe(
      { uid: '1', name: 'player1' },
      createPlayer,
      createIdToPlayer,
      O.map((player) => {
        player.hands = [
          { id: '1', status: Status.Unrevealed, creature: Creature.Bat },
        ];
        return player;
      }),
      O.map(checkPlayerHasUnrevealedCardOfHands),
    );

    expect(hasUnrevealedCard).toStrictEqual(O.some(true));
  });

  it(`
    given a player
      hands [
      ]
    when check player has unrevealed card
    then
      player not has unrevealedCard
  `, () => {
    const hasUnrevealedCard = pipe(
      { uid: '1', name: 'player1' },
      createPlayer,
      createIdToPlayer,
      O.map(checkPlayerHasUnrevealedCardOfHands),
    );

    expect(hasUnrevealedCard).toStrictEqual(O.some(false));
  });
});
