import { Player } from 'player';
import { pipe } from 'fp-ts/function';
import { prop } from 'remeda';

export interface CheckPlayerHasUnrevealedCardOfHands {
  (player: Player): boolean;
}

export const checkPlayerHasUnrevealedCardOfHands: CheckPlayerHasUnrevealedCardOfHands =
  (player: Player) =>
    pipe(
      //
      player,
      prop('hands'),
      prop('length'),
      (length) => length > 0,
    );
