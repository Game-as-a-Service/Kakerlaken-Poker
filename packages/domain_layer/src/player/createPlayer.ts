import { User } from 'user';
import { prop, equals, not, and } from 'ramda';
import O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

import { Player } from './type';

interface CreatePlayer {
  (user: User): O.Option<Player>;
}

const userCovertToPlayer = (user: User) =>
  pipe(
    //
    O.Do,
    O.apS('uid', O.some(user.uid)),
    O.apS('name', O.some(user.name)),
  );

const haveNameAndUid = (user: User) =>
  and(
    pipe(user, prop('uid'), equals(''), not),
    pipe(user, prop('name'), equals(''), not),
  );

export const createPlayer: CreatePlayer = (user) =>
  pipe(
    //
    user,
    O.fromPredicate(haveNameAndUid),
    O.chain(userCovertToPlayer),
    O.apS('hands', O.some([])),
    O.apS('pastReceivedCards', O.some([])),
  );
