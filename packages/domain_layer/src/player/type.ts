import { Card } from 'card';

export type Player = {
  id: string;
  uid: string;
  name: string;
  hands: Card[];
  pastReceivedCards: Card[];
};

export type OmitIdPlayer = Omit<Player, 'id'>;
