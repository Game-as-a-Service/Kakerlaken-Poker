import O from 'fp-ts/Option';
import A from 'fp-ts/Array';

import { Player } from './type';

/**
 *
 *
 * 原始
 * Option{ player }
 * -> 2種情況
 * Option.some
 *  -> Player
 * Option.none
 *  -> none
 *
 * 過渡時期 [Option{ player }] -> ([player1])
 *
 * if array some is none
 *  -> Option.none
 * else
 *  -> Option.some{ [player1, player2] }
 *
 *
 * A.sequence(O.Applicative)
 *
 * 下面
 * Option{ player[] }
 * -> 兩種情況
 * Option.some
 *  -> Player[]
 * Option.none
 *  -> none
 *
 * Array<O.Option<Player>> -> O.Option<Array<Player>>
 */

export const toPlayers = (...players: O.Option<Player>[]) =>
  A.sequence(O.Applicative)(players);
