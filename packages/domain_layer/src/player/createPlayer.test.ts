import O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import { prop, path, always } from 'ramda';
import { User } from 'user';

import { createPlayer } from './createPlayer';

describe('createPlayer', () => {
  it(`
    given user
      userName is 'one'
      userUid is ''

    when create player
    then create player fail -> return none
  `, () => {
    const user: User = { uid: '', name: 'one' };

    const player = createPlayer(user);

    expect(player).toBe(O.none);
  });

  it(`
    given user
      userName is 'one'
      userUid is 'one'

    when create player
    then create player successfully -> return player
  `, () => {
    const user: User = { uid: 'one', name: 'one' };

    const player = createPlayer(user);

    test('should name is `one`', () => {
      expect(
        pipe(
          //
          player,
          O.map(prop('name')),
          O.getOrElseW(always(O.none)),
        ),
      ).toBe('one');
    });

    test('should uid is `one`', () => {
      expect(
        pipe(
          //
          player,
          O.map(prop('uid')),
          O.getOrElseW(always(O.none)),
        ),
      ).toBe('one');
    });

    test('should hands is empty array', () => {
      expect(
        pipe(
          //
          player,
          O.map(path(['hands', 'length'])),
          O.getOrElseW(always(O.none)),
        ),
      ).toBe(0);
    });

    test('should pastReceivedCards is empty array', () => {
      expect(
        pipe(
          //
          player,
          O.map(path(['pastReceivedCards', 'length'])),
          O.getOrElseW(always(O.none)),
        ),
      ).toBe(0);
    });
  });
});
