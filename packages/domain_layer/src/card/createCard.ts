import { pipe } from 'fp-ts/function';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import { Card, Creature, Status } from './type';
import str from 'fp-ts/string';
interface CreateCard {
  (creature: Creature, id: number): O.Option<Card>;
}

const creatureEq = str.Eq;
const isCreature = (creature: Creature) =>
  pipe(
    //
    Creature,
    Object.values,
    A.elem(creatureEq)(creature),
  );

const createCard: CreateCard = (creature, id) =>
  pipe(
    //
    creature,
    O.fromPredicate(isCreature),
    O.bindTo('creature'),
    O.apS('id', O.some(id)),
  );

export default createCard;
