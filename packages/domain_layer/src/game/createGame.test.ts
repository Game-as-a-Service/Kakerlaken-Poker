import { pipe } from 'fp-ts/function';
import O from 'fp-ts/Option';
import { always, path } from 'ramda';
import { Player } from 'player';

import { createGame } from './createGame';

describe('createGame', () => {
  it(`
    given players
      contain zero players
    when create game
      the number of player is invalid
    then create game fail -> return none
    `, () => {
    const players: Player[] = [];
    const game = createGame(players);

    expect(game).toBe(O.none);
  });

  it(`
    given players
      contain one players
    when create game
      the number of player is invalid
    then create game fail -> return none
    `, () => {
    const players: Player[] = [
      { uid: '1', name: '1', hands: [], pastReceivedCards: [] },
    ];
    const game = createGame(players);

    expect(game).toBe(O.none);
  });

  it(`
    given players
      contain two players
    when create game
      the number of player is valid
    then create game successfully -> return game
    `, () => {
    const players: Player[] = [
      { uid: '1', name: '1', hands: [], pastReceivedCards: [] },
      { uid: '2', name: '2', hands: [], pastReceivedCards: [] },
    ];

    const game = createGame(players);

    test('should have game object', () => {
      expect(game).toMatchObject(
        O.some({
          players: [],
          rounds: [],
          deck: [],
        }),
      );
    });

    test('should game have deck and the deck should have 64 cards', () => {
      expect(
        pipe(
          //
          game,
          O.map(path(['deck', 'length'])),
          O.getOrElseW(always(O.none)),
        ),
      ).toBe(64);
    });
  });
});
