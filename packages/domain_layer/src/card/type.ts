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
  id?: string;
  status: Status;
  creature: Creature;
};
