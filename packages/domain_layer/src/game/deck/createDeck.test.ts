import { Creature, NoIdCard } from 'card';
import * as R from 'ramda';
import { pipe } from 'fp-ts/function';

import { createDeck } from './createDeck';

describe('createDeck', () => {
  let deck: Array<NoIdCard>;

  beforeEach(() => {
    deck = createDeck();
  });

  const getCreatureCountOfDeck =
    (creature: Creature) => (deck: Array<NoIdCard>) =>
      pipe(deck, R.filter(R.propEq(creature, 'creature')), R.length);

  it('should create a deck with 64 Cards', () => {
    const received = deck.length;
    const expected = 64;

    expect(received).toBe(expected);
  });

  it('should create a deck with 8 Bats', () => {
    const received = getCreatureCountOfDeck(Creature.Bat)(deck);
    const expected = 8;

    expect(received).toBe(expected);
  });

  it('should create a deck with 8 Flies', () => {
    const received = getCreatureCountOfDeck(Creature.Fly)(deck);
    const expected = 8;

    expect(received).toBe(expected);
  });

  it('should create a deck with 8 Rat', () => {
    const received = getCreatureCountOfDeck(Creature.Rat)(deck);
    const expected = 8;

    expect(received).toBe(expected);
  });

  it('should create a deck with 8 Scorpions', () => {
    const received = getCreatureCountOfDeck(Creature.Scorpion)(deck);
    const expected = 8;

    expect(received).toBe(expected);
  });

  it('should create a deck with 8 Spiders', () => {
    const received = getCreatureCountOfDeck(Creature.Spider)(deck);
    const expected = 8;

    expect(received).toBe(expected);
  });

  it('should create a deck with 8 Stick Bugs', () => {
    const received = getCreatureCountOfDeck(Creature.StickBug)(deck);
    const expected = 8;

    expect(received).toBe(expected);
  });

  it('should create a deck with 8 Toads', () => {
    const received = getCreatureCountOfDeck(Creature.Toad)(deck);
    const expected = 8;

    expect(received).toBe(expected);
  });
});
