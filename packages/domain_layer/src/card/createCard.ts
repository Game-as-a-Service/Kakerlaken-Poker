import { pipe } from 'fp-ts/function';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import Eq from 'fp-ts/Eq';

import { NoIdCard, Creature, Status } from './type';

type CreateCard = (creature: Creature) => O.Option<NoIdCard>;

const isCreature = (creature: unknown): creature is Creature =>
  pipe(
    //
    Creature,
    Object.values,
    A.elem(Eq.eqStrict)(creature),
  );

export const createCard: CreateCard = (creature) =>
  pipe(
    //
    creature,
    O.fromPredicate(isCreature),
    O.bindTo('creature'),
    O.apS('status', O.some(Status.Unrevealed)),
  );
