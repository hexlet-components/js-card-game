// @ts-check

import { cons, l, random } from '@hexlet/pairs-data';

import { getName, damage } from './src/card';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, log) => {
    if (health1 <= 0) {
      return cons(`${name1} был убит`, log);
    }
    const card = random(cards);
    const cardName = getName(card);
    const points = damage(card, health2);
    const newHealth = health2 - points;

    const message = `\nИгрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
    const currentState = l(l(name1, health1), l(name2, health2));
    const newLog = cons(l(currentState, message), log);
    return iter(newHealth, name2, health1, name1, newLog);
  };

  return iter(10, player1, 10, player2, l('\nНачинаем бой!'));
};

export default (cards) => (name1, name2) => run(name1, name2, cards);
