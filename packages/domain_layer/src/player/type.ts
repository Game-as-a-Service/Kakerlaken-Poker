import { Card } from 'card';

export type Player = {
  id: number;
  hands: Card[];
  pastReceivedCards: Card[];
};

export enum SelectedPlayerAction {
  guessing = 'GUESSING',
  escape = 'ESCAPE',
}

export type SelectedPlayer = Player & {
  action: SelectedPlayerAction;
};
