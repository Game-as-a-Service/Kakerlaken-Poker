import { Card } from 'card';
import { Player } from 'player';
import { Round } from 'round';

export type Game = {
  id?: number;
  players: Player[];
  rounds: Round[];
  deck: Card[];
};
