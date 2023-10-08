import { pipe } from 'fp-ts/function';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import { createIdToPlayer, createPlayer, toPlayers } from 'player';
import { prop, path } from 'ramda';

import { createGame, createIdToGame } from './createGame';
import { dealCards } from './dealCards';

describe('dealCards', () => {
  it(`
    given game
      contain two player
    when deal cards
      the each player should have 32 cards
    then return game
    `, () => {
    const player1 = createIdToPlayer(
      createPlayer({ uid: '1', name: 'player1' }),
    );
    const player2 = createIdToPlayer(
      createPlayer({ uid: '2', name: 'player2' }),
    );

    const players = toPlayers(player1, player2);
    const game = pipe(
      //
      players,
      O.chain(createGame),
      createIdToGame,
    );

    const dealtCardsGame = pipe(
      //
      game,
      O.map(dealCards),
    );

    /**
     * 1. get game
     * 2. prop to players
     * 3. map players to hands length
     * 4. check array is  [32, 32]
     */

    expect(
      pipe(
        //
        dealtCardsGame,
        O.map(prop('players')),
        O.map(A.map(path(['hands', 'length']))),
      ),
    ).toMatchObject(O.some(A.replicate(2, 32)));
  });

  it(`
    given game
      contain three player
    when deal cards
      the each player should have 21 cards
    then return game
    `, () => {
    const player1 = createIdToPlayer(
      createPlayer({ uid: '1', name: 'player1' }),
    );
    const player2 = createIdToPlayer(
      createPlayer({ uid: '2', name: 'player2' }),
    );
    const player3 = createIdToPlayer(
      createPlayer({ uid: '3', name: 'player3' }),
    );

    const players = toPlayers(player1, player2, player3);
    const game = pipe(
      //
      players,
      O.chain(createGame),
      createIdToGame,
    );

    const dealtCardsGame = pipe(
      //
      game,
      O.map(dealCards),
    );

    expect(
      pipe(
        //
        dealtCardsGame,
        O.map(prop('players')),
        O.map(A.map(path(['hands', 'length']))),
      ),
    ).toMatchObject(O.some(A.replicate(3, 21)));
  });

  it(`
    given game
      contain four player
    when deal cards
      the each player should have 16 cards
    then return game
    `, () => {
    const player1 = createIdToPlayer(
      createPlayer({ uid: '1', name: 'player1' }),
    );
    const player2 = createIdToPlayer(
      createPlayer({ uid: '2', name: 'player2' }),
    );
    const player3 = createIdToPlayer(
      createPlayer({ uid: '3', name: 'player3' }),
    );
    const player4 = createIdToPlayer(
      createPlayer({ uid: '4', name: 'player4' }),
    );

    const players = toPlayers(player1, player2, player3, player4);
    const game = pipe(
      //
      players,
      O.chain(createGame),
      createIdToGame,
    );

    const dealtCardsGame = pipe(
      //
      game,
      O.map(dealCards),
    );

    /**
     * 1. get game
     * 2. prop to players
     * 3. map players to hands length
     * 4. check array is  [32, 32]
     */

    expect(
      pipe(
        //
        dealtCardsGame,
        O.map(prop('players')),
        O.map(A.map(path(['hands', 'length']))),
      ),
    ).toMatchObject(O.some(A.replicate(4, 16)));
  });

  it(`
    given game
      contain five player
    when deal cards
      the each player should have 12 cards
    then return game
    `, () => {
    const player1 = createIdToPlayer(
      createPlayer({ uid: '1', name: 'player1' }),
    );
    const player2 = createIdToPlayer(
      createPlayer({ uid: '2', name: 'player2' }),
    );
    const player3 = createIdToPlayer(
      createPlayer({ uid: '3', name: 'player3' }),
    );
    const player4 = createIdToPlayer(
      createPlayer({ uid: '4', name: 'player4' }),
    );
    const player5 = createIdToPlayer(
      createPlayer({ uid: '5', name: 'player5' }),
    );

    const players = toPlayers(player1, player2, player3, player4, player5);
    const game = pipe(
      //
      players,
      O.chain(createGame),
      createIdToGame,
    );

    const dealtCardsGame = pipe(
      //
      game,
      O.map(dealCards),
    );

    /**
     * 1. get game
     * 2. prop to players
     * 3. map players to hands length
     * 4. check array is  [32, 32]
     */

    expect(
      pipe(
        //
        dealtCardsGame,
        O.map(prop('players')),
        O.map(A.map(path(['hands', 'length']))),
      ),
    ).toMatchObject(O.some(A.replicate(5, 12)));
  });

  it(`
    given game
      contain six player
    when deal cards
      the each player should have 10 cards
    then return game
    `, () => {
    const player1 = createIdToPlayer(
      createPlayer({ uid: '1', name: 'player1' }),
    );
    const player2 = createIdToPlayer(
      createPlayer({ uid: '2', name: 'player2' }),
    );
    const player3 = createIdToPlayer(
      createPlayer({ uid: '3', name: 'player3' }),
    );
    const player4 = createIdToPlayer(
      createPlayer({ uid: '4', name: 'player4' }),
    );
    const player5 = createIdToPlayer(
      createPlayer({ uid: '5', name: 'player5' }),
    );
    const player6 = createIdToPlayer(
      createPlayer({ uid: '6', name: 'player6' }),
    );

    const players = toPlayers(
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
    );
    const game = pipe(
      //
      players,
      O.chain(createGame),
      createIdToGame,
    );

    const dealtCardsGame = pipe(
      //
      game,
      O.map(dealCards),
    );

    /**
     * 1. get game
     * 2. prop to players
     * 3. map players to hands length
     * 4. check array is  [32, 32]
     */

    expect(
      pipe(
        //
        dealtCardsGame,
        O.map(prop('players')),
        O.map(A.map(path(['hands', 'length']))),
      ),
    ).toMatchObject(O.some(A.replicate(6, 10)));
  });
});

/**
 * chain alias flapMap
 *
 * 兩個步驟的合併
 * 1. map
 * 2. flatten || O.Option<O.Option<A>> -> O.Option<A>
 *
 * [[a]] -> [a]
 *
 * chain: <A, B>(f: (a: A) => O.Option<B>) => (x: O.Option<A>) => O.Option<B>;
 *  a -> Option<b>
 *
 * chain 有可能是 none
 * (一定得回傳Option)
 *
 * some<a> -> some<b>
 * some<a> -> none
 *
 * map: <A, B>(f: (a: A) => B) => (x: Option<A>) => Option<B>;
 *
 * map
 *  a -> b
 *
 * map 無論如何 都是 some
 * (回傳結果外面包一層Option)
 *
 * some<a> -> some<b>
 */
