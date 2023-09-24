import O from 'fp-ts/Option';

import { createCard } from './createCard';
import { Creature, Status } from './type';

describe('createCard', () => {
  it(`
    given a creature
      creature is 'a'
    when create card the creature is not valid
    then return none
    `, () => {
    const creature: Creature = 'a' as any;

    const card = createCard(creature);

    expect(card).toBe(O.none);
  });

  it(`
    given a creature
      creature is 'Bat'
    when create card
      the creature is valid
    then return Card
      creature is 'Bat'
    `, () => {
    const creature: Creature = Creature.Bat;

    const card = createCard(creature);

    expect(card).toMatchObject(
      O.some({
        creature: Creature.Bat,
      }),
    );
  });

  it(`
    given a creature
      creature is 'Bat'
    when create card
      the creature is valid
      and initial status is unrevealed
    then return card
      creature is 'Bat'
      status is unrevealed

    `, () => {
    const creature: Creature = Creature.Bat;

    const card = createCard(creature);

    expect(card).toMatchObject(
      O.some({
        creature: Creature.Bat,
        status: Status.Unrevealed,
      }),
    );
  });

  it(`
    given a creature
      creature is 'Cockroach'
    when create card
      the creature is valid
      and initial status is unrevealed
    then return card
      creature is 'Cockroach'
      status is unrevealed
    `, () => {
    const creature: Creature = Creature.Cockroach;

    const card = createCard(creature);

    expect(card).toMatchObject(
      O.some({
        creature: Creature.Cockroach,
        status: Status.Unrevealed,
      }),
    );
  });

  it(`
    given a creature
      creature is 'Fly'
    when create card
      the creature is valid
      and initial status is unrevealed
    then return card
      creature is 'Fly'
      status is unrevealed
    `, () => {
    const creature: Creature = Creature.Fly;

    const card = createCard(creature);

    expect(card).toMatchObject(
      O.some({
        creature: Creature.Fly,
        status: Status.Unrevealed,
      }),
    );
  });
});
