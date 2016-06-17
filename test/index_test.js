// @flow

import assert from 'assert';
import { cons } from 'hexlet-pairs';
import { l, reverse, toString } from 'hexlet-pairs-data';
import { make } from '../index';
import { describe, it } from 'mocha';

describe('CardGame', () => {
  it('#cons', () => {
    const cards = l(
      cons('Проказливый рубитель крови', health => health / 2),
      cons('Прохладный чыонг-бонг рыка', () => 3),
      cons('Правящая обсидиановая руна убийства демонов', health => Math.round(health * 0.7))
    );
    const game = make(cards);
    const log = game('John', 'Ada');
    console.log(toString(reverse(log)));
  });
});
