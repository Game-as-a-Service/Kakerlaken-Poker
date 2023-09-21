import createCard from './createCard';
import O from 'fp-ts/Option';
import { Creature } from './type';

describe('createCard', () => {
  it(`
    given a creature and an id
      creature is 'a'
      id is 1
    when create card the creature is not valid
    then return none
    `, () => {
    const creature: Creature = 'a' as any;

    const card = createCard(creature, 1);

    expect(card).toBe(O.none);
  });
});
