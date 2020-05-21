// @ts-check

import { l, reverse, toString } from '@hexlet/pairs-data';
import make from '../index';
import * as percentCard from '../src/percentCard';
import * as simpleCard from '../src/simpleCard';

describe('CardGame', () => {
  it('#cons', () => {
    const cards = l(
      percentCard.make('Проказливый рубитель крови', 50),
      simpleCard.make('Прохладный чыонг-бонг рыка', 3),
      percentCard.make('Воздушный змей клеветы', 40),
    );
    const game = make(cards);
    const log = game('John', 'Ada');
    console.log(toString(reverse(log)));
    expect(true).toBeTruthy();
  });
});
