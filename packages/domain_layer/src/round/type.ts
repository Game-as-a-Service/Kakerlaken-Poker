import { Player } from 'player';

export type Round = {
  id: string;
  currentPlayer: Player;
  selectedPlayer: Player;
};
