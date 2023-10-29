import { pipe } from 'fp-ts/lib/function';
import { prop } from 'remeda';
import O from 'fp-ts/lib/Option';
import { createGame, createIdToGame } from 'game';
import { Player } from 'player';

import { createRound } from './createRound';
import { SelectedPlayerState } from './type';

describe('createRound', () => {
  it(`
    given game
      rounds is empty array # no started round
    when create round
    then return round
      currentPlayer is random
  `, () => {
    const players: Player[] = [
      { id: '1', uid: '1', name: '1', hands: [], pastReceivedCards: [] },
      { id: '2', uid: '2', name: '2', hands: [], pastReceivedCards: [] },
    ];
    const game = pipe(
      //
      createGame(players),
      createIdToGame,
    );

    const round = pipe(
      //
      game,
      O.map(createRound),
    );

    expect(round).toMatchObject(
      O.some({
        selectedPlayer: null,
        state: SelectedPlayerState.NONE,
      }),
    );

    const currentPlayer = pipe(
      round,
      O.map(prop('currentPlayer')),
      O.toUndefined,
    );

    const currentPlayerIsInPlayers = players.some(
      (player) => player.id === currentPlayer.id,
    );

    expect(currentPlayerIsInPlayers).toBe(true);
  });

  it(`
    given game
      rounds array has one round
      prevRound's selectedPlayer.state is GUESS_CARD_WIN
    when create round
    then return round
      currentPlayer is preRound's currentPlayer
  `, () => {
    const players: Player[] = [
      { id: '1', uid: '1', name: '1', hands: [], pastReceivedCards: [] },
      { id: '2', uid: '2', name: '2', hands: [], pastReceivedCards: [] },
    ];

    const game = pipe(
      //
      createGame(players),
      createIdToGame,
    );

    const round = pipe(
      //
      game,
      O.map((game) => ({
        ...game,
        rounds: [
          {
            id: '1',
            currentPlayer: game.players[0],
            selectedPlayer: game.players[1],
            state: SelectedPlayerState.GUESS_CARD_WIN,
          },
        ],
      })),
      O.map(createRound),
    );

    expect(round).toMatchObject(
      O.some({
        currentPlayer: pipe(
          game,
          O.map(prop('players')),
          O.map(prop(0)),
          O.toUndefined,
        ),
        selectedPlayer: null,
        state: SelectedPlayerState.NONE,
      }),
    );
  });

  it(`
    given game
      rounds array has one round
      prevRound's selectedPlayer.state is GUESS_CARD_LOSS
    when create round
    then return round
      currentPlayer is preRound's selectedPlayer
  `, () => {
    const players: Player[] = [
      { id: '1', uid: '1', name: '1', hands: [], pastReceivedCards: [] },
      { id: '2', uid: '2', name: '2', hands: [], pastReceivedCards: [] },
    ];

    const game = pipe(
      //
      createGame(players),
      createIdToGame,
    );

    const round = pipe(
      //
      game,
      O.map((game) => ({
        ...game,
        rounds: [
          {
            id: '1',
            currentPlayer: game.players[0],
            selectedPlayer: game.players[1],
            state: SelectedPlayerState.GUESS_CARD_LOSS,
          },
        ],
      })),
      O.map(createRound),
    );

    expect(round).toMatchObject(
      O.some({
        currentPlayer: pipe(
          game,
          O.map(prop('players')),
          O.map(prop(1)),
          O.toUndefined,
        ),
        selectedPlayer: null,
        state: SelectedPlayerState.NONE,
      }),
    );
  });

  it(`
    given game
      rounds array has one round
      prevRound's selectedPlayer.state is EVADE_LOOK_CARD
    when create round
    then return round
      currentPlayer is preRound's selectedPlayer
  `, () => {
    const players: Player[] = [
      { id: '1', uid: '1', name: '1', hands: [], pastReceivedCards: [] },
      { id: '2', uid: '2', name: '2', hands: [], pastReceivedCards: [] },
    ];

    const game = pipe(
      //
      createGame(players),
      createIdToGame,
    );

    const round = pipe(
      //
      game,
      O.map((game) => ({
        ...game,
        rounds: [
          {
            id: '1',
            currentPlayer: game.players[0],
            selectedPlayer: game.players[1],
            state: SelectedPlayerState.EVADE_LOOK_CARD,
          },
        ],
      })),
      O.map(createRound),
    );

    expect(round).toMatchObject(
      O.some({
        currentPlayer: pipe(
          game,
          O.map(prop('players')),
          O.map(prop(1)),
          O.toUndefined,
        ),
        selectedPlayer: null,
        state: SelectedPlayerState.NONE,
      }),
    );
  });

  it(`
    given game
      rounds array has one round
      prevRound's selectedPlayer.state is EVADE_NOT_LOOK_CARD
    when create round
    then return round
      currentPlayer is preRound's selectedPlayer
  `, () => {
    const players: Player[] = [
      { id: '1', uid: '1', name: '1', hands: [], pastReceivedCards: [] },
      { id: '2', uid: '2', name: '2', hands: [], pastReceivedCards: [] },
    ];

    const game = pipe(
      //
      createGame(players),
      createIdToGame,
    );

    const round = pipe(
      //
      game,
      O.map((game) => ({
        ...game,
        rounds: [
          {
            id: '1',
            currentPlayer: game.players[0],
            selectedPlayer: game.players[1],
            state: SelectedPlayerState.EVADE_NOT_LOOK_CARD,
          },
        ],
      })),
      O.map(createRound),
    );

    expect(round).toMatchObject(
      O.some({
        currentPlayer: pipe(
          game,
          O.map(prop('players')),
          O.map(prop(1)),
          O.toUndefined,
        ),
        selectedPlayer: null,
        state: SelectedPlayerState.NONE,
      }),
    );
  });
});
