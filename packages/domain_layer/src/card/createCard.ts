import { pipe } from 'fp-ts/function';
import O from 'fp-ts/Option';
import { Card, Creature } from './type';
interface CreateCard {
  (creature: Creature, id: number): O.Option<Card>;
}

const createCard: CreateCard = () =>
  pipe(
    //
    O.none,
  );

export default createCard;
