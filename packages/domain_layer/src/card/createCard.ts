import { pipe } from 'fp-ts/function';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import Eq from 'fp-ts/Eq';

import { Card, Creature, Status } from './type';

interface CreateCard {
  (creature: Creature): O.Option<Omit<Card, 'id'>>;
}

const isCreature = (creature: unknown): creature is Creature =>
  pipe(
    //
    Creature,
    Object.values,
    A.elem(Eq.eqStrict)(creature),
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
