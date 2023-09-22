import { createDeck } from './createDeck';

describe('createDeck', () => {
  it('should create a deck with 64 cards', () => {
    const deck = createDeck();
    expect(deck.length).toBe(64);
  });
});
