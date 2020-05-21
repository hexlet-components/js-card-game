// @ts-check

import { cons, car, cdr } from '@hexlet/pairs';
import definer from './card';

const defmethod = definer('PercentCard');

export const make = (name, percent) => cons('PercentCard', cons(name, percent));

export const damage = (self, health) => Math.round(health * (cdr(cdr(self)) / 100));

defmethod('getName', (self) => car(cdr(self)));

defmethod('damage', (self, health) => Math.round(health * (cdr(cdr(self)) / 100)));
