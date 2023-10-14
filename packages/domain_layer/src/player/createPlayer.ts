import { User } from 'user';
import { not } from 'utils/fp';
import { prop, equals, allPass } from 'remeda';
import O from 'fp-ts/Option';
import { flow, pipe } from 'fp-ts/function';

import { OmitIdPlayer, Player } from './type';

interface CreatePlayer {
  (user: User): O.Option<OmitIdPlayer>;
}

const userCovertToPlayer = (user: User) =>
  pipe(
    //
    O.Do,
    O.apS('uid', O.some(user.uid)),
    O.apS('name', O.some(user.name)),
  );

const haveNameAndUid = (user: User) =>
  allPass(user, [
    flow(prop('uid'), equals(''), not),
    flow(prop('name'), equals(''), not),
  ]);

export const createPlayer: CreatePlayer = (user) =>
  pipe(
    //
    user,
    O.fromPredicate(haveNameAndUid),
    O.chain(userCovertToPlayer),
    O.apS('hands', O.some([])),
    O.apS('pastReceivedCards', O.some([])),
  );

export const createIdToPlayer = (
  player: O.Option<OmitIdPlayer>,
): O.Option<Player> =>
  pipe(
    player,
    O.map((player) => ({ ...player, id: player.uid })),
  );
