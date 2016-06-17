// @flow

import * as pairs from 'hexlet-pairs';
import { cons, l, random } from 'hexlet-pairs-data';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, log) => {
    if (health1 < 0) {
      return cons(`${name1} был убит`, log);
    }
    const card = random(cards);
    const cardName = pairs.car(card);
    const damage = pairs.cdr(card)(health2);
    const newHealth = health2 - damage;

    const message = `\nИгрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    const newLog = cons(message, log);
    return iter(newHealth, name2, health1, name1, newLog);
  };

  return iter(10, player1, 10, player2, l('\nНачинаем бой!'));
};

export const make = (cards: Function) =>
  (name1: string, name2: string) =>
    run(name1, name2, cards);
