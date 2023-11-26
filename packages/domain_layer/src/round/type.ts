import { Card } from 'card';
import { Player } from 'player';

export enum SelectedPlayerState {
  'NONE',
  'GUESS_CARD_ING',
  'GUESS_CARD_LOSS',
  'GUESS_CARD_WIN',
  'EVADE_ING',
  'EVADE_LOOK_CARD',
  'EVADE_NOT_LOOK_CARD',
}

export type Round = {
  id: string;
  currentPlayer: Player;
  selectedPlayer?: Player;
  selectedCard?: Card;
  state: SelectedPlayerState;
};

export type OmitIdRound = Omit<Round, 'id'>;
