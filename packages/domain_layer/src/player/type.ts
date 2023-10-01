import { Card } from 'card';

export type Player = {
  id?: number;
  uid: string;
  name: string;
  hands: Card[];
  pastReceivedCards: Card[];
};
