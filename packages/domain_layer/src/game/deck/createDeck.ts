import { Creature, NoIdCard, createCard } from 'card';
import { always } from 'ramda';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

const createSingleCreatureCards = (creature: Creature) =>
  pipe(
    //
    createCard(creature),
    O.map((card) => A.makeBy(8, always(card))),
  );

const appendCardToDeck = (creature: Creature) =>
  A.concat(
    pipe(
      //
      createSingleCreatureCards(creature),
      O.getOrElse(Array.of<NoIdCard>),
    ),
  );

export const createDeck = () =>
  pipe(
    //
    [],
    appendCardToDeck(Creature.Bat),
    appendCardToDeck(Creature.Cockroach),
    appendCardToDeck(Creature.Fly),
    appendCardToDeck(Creature.Rat),
    appendCardToDeck(Creature.Scorpion),
    appendCardToDeck(Creature.Spider),
    appendCardToDeck(Creature.StickBug),
    appendCardToDeck(Creature.Toad),
  );
