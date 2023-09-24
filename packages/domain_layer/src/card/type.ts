export enum Creature {
  Bat = 'BAT',
  Cockroach = 'COCKROACH',
  Fly = 'FLY',
  Toad = 'TOAD',
  Rat = 'RAT',
  Scorpion = 'SCORPION',
  Spider = 'SPIDER',
  StickBug = 'STICK_BUG',
}

export enum Status {
  Unrevealed = 'UNREVEALED',
  Revealed = 'REVEALED',
}

export type Card = {
  id: number;
  status: Status;
  creature: Creature;
};

/** Used to demonstrate all properties of nested type. */
type Prettify<T> = { [K in keyof T]: T[K] } & unknown;

export type NoIdCard = Prettify<Omit<Card, 'id'>>;
