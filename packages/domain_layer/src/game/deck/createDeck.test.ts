import { Creature } from 'card';
import { createDeck } from './createDeck';

describe('createDeck', () => {
  it('should create a deck with 64 Cards', () => {
    const deck = createDeck();
    expect(deck.length).toBe(64);
  });

  it('should create a deck with 8 Bats', () => {
    const deck = createDeck();
    const bats = deck.filter((card) => card.creature === Creature.Bat);
    expect(bats.length).toBe(8);
  });

  it('should create a deck with 8 Fly', () => {
    const deck = createDeck();
    const rats = deck.filter((card) => card.creature === Creature.Fly);
    expect(rats.length).toBe(8);
  });

  it('should create a deck with 8 Rat', () => {
    const deck = createDeck();
    const rats = deck.filter((card) => card.creature === Creature.Rat);
    expect(rats.length).toBe(8);
  });

  it('should create a deck with 8 Scorpions', () => {
    const deck = createDeck();
    const rats = deck.filter((card) => card.creature === Creature.Scorpion);
    expect(rats.length).toBe(8);
  });

  it('should create a deck with 8 Spiders', () => {
    const deck = createDeck();
    const rats = deck.filter((card) => card.creature === Creature.Spider);
    expect(rats.length).toBe(8);
  });

  it('should create a deck with 8 Stick Bugs', () => {
    const deck = createDeck();
    const rats = deck.filter((card) => card.creature === Creature.StickBug);
    expect(rats.length).toBe(8);
  });

  it('should create a deck with 8 Stick Toads', () => {
    const deck = createDeck();
    const rats = deck.filter((card) => card.creature === Creature.Toad);
    expect(rats.length).toBe(8);
  });
});
