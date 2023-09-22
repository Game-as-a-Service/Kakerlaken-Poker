import { Card } from 'card';

export type Player = {
  id: number;
  hands: Card[];
  pastReceivedCards: Card[];
};
