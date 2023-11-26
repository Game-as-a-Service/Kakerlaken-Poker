import O from 'fp-ts/Option';
import { Game } from 'game';
import { Round } from 'round';
import { Card, Creature, Status } from 'card';

import { Player } from './type';
import { currentPlayerSelectUnrevealedCard } from './currentPlayerSelectUnrevealedCard';

describe('CurrentPlayerSelectUnrevealedCard', () => {
  it(`given a game
        contain player A B
      and
        player A hand [
          { id: 9999, status: 'UNREVEALED', creature: 'BAT' }
        ]
      when player A selected { id: 9999, status: 'UNREVEALED', creature: 'BAT' }
      then return round
  `, () => {
    // Arrange
    const playerA: Player = {
      id: '1',
      uid: '1',
      name: 'A',
      hands: [],
      pastReceivedCards: [],
    };
    const playerB: Player = {
      id: '2',
      uid: '2',
      name: 'B',
      hands: [],
      pastReceivedCards: [],
    };

    const game: Game = {
      id: '1',
      players: [playerA, playerB],
      rounds: [],
      deck: [],
    };

    const card: Card = {
      id: '9999',
      status: Status.Unrevealed,
      creature: Creature.Bat,
    };

    playerA.hands = [card];
    game.deck = [card];

    const round: Round = {
      id: '1',
      currentPlayer: playerA,
      selectedCard: undefined,
      state: undefined,
    };

    game.rounds = [round];

    // Act
    const result = currentPlayerSelectUnrevealedCard(game)(playerA)(card);

    // Assert
    expect(result).toMatchObject(O.some({ ...round, selectedCard: card }));
  });
});
