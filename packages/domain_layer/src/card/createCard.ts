import { pipe } from 'fp-ts/function';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import { Card, Creature, Status } from './type';
import str from 'fp-ts/string';
interface CreateCard {
  (creature: Creature): O.Option<Omit<Card, 'id'>>;
}

const creatureEq = str.Eq;
const isCreature = (creature: Creature) =>
  pipe(
    //
    Creature,
    Object.values,
    A.elem(creatureEq)(creature),
  );

const createCard: CreateCard = (creature) =>
  pipe(
    //
    creature,
    O.fromPredicate(isCreature),
    O.bindTo('creature'),
    O.apS('status', O.some(Status.Unrevealed)),
  );

export default createCard;
