export enum CardCreatures {
  Bat = 'BAT',
  Cockroach = 'COCKROACH',
  Fly = 'FLY',
  Toad = 'TOAD',
  Rat = 'RAT',
  Scorpion = 'SCORPION',
  Spider = 'SPIDER',
  StickBug = 'STICK_BUG',
}

export enum CardStatus {
  Unrevealed = 'UNREVEALED',
  Revealed = 'REVEALED',
}

export type Card = {
  id: string;
  status: CardStatus;
  value: number;
};
