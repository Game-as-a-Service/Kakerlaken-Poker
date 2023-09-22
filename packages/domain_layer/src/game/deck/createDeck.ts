import { Card, Creature, createCard } from 'card';
import { always } from 'ramda';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

type NoIdCards = Omit<Card, 'id'>[];

interface CreateDeck {
  (): NoIdCards;
}

const createSignedCard = (creature: Creature) =>
  pipe(
    //
    createCard(creature),
    O.map((card) => A.makeBy(8, always(card))),
  );

const concatCardOfDeck = (creature: Creature) =>
  A.concat(
    pipe(
      //
      createSignedCard(creature),
      O.getOrElse<NoIdCards>(always([])),
    ),
  );

export const createDeck: CreateDeck = () =>
  pipe(
    //
    [],
    concatCardOfDeck(Creature.Bat),
    concatCardOfDeck(Creature.Cockroach),
    concatCardOfDeck(Creature.Fly),
    concatCardOfDeck(Creature.Rat),
    concatCardOfDeck(Creature.Scorpion),
    concatCardOfDeck(Creature.Spider),
    concatCardOfDeck(Creature.StickBug),
    concatCardOfDeck(Creature.Toad),
  );
