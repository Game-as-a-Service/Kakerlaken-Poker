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

export const createCard: CreateCard = (creature) =>
  pipe(
    //
    creature, // 'BAT'
    O.fromPredicate(isCreature), // true => { _tag: 'Some', value: 'BAT' }
    O.bindTo('creature'), // { _tag: 'Some', value: {creature: 'BAT' }}
    O.apS('status', O.some(Status.Unrevealed)), // {_tag: 'Some', value: {create:'BAT', status: 'UNREVEALED'}}
  );
