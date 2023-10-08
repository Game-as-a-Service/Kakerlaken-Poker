import { Card } from 'card';
import { Player } from 'player';
import { Round } from 'round';

export type Game = {
  id: string;
  players: Player[];
  rounds: Round[];
  deck: Card[];
};

export type OmitIdGame = Omit<Game, 'id'>;
