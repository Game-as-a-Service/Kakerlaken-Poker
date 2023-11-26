import { Card, Creature, createCard } from 'card';
import { always } from 'utils/fp';
import A from 'fp-ts/Array';
import O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import { Game } from 'game';

type NoIdCards = Omit<Card, 'id'>[];

interface CreateDeck {
  (): NoIdCards;
}

const createSingleCreatureCards = (creature: Creature) =>
  pipe(
    //
    createCard(creature),
    O.map((card) => A.makeBy(8, always(card))),
  );

const concatCardOfDeck = (creature: Creature) =>
  A.concat(
    pipe(
      //
      createSingleCreatureCards(creature),
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

export const createIdToCardOfDeck = (game: Game): Game =>
  pipe(
    //
    game,
    (game) => ({
      ...game,
      deck: pipe(
        game.deck,
        A.mapWithIndex<Card, Card>((idx, card) => ({
          ...card,
          id: idx.toString(),
        })),
      ),
    }),
  );
