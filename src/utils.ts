import Interval from './types/Interval';
import Section from './types/Section';
import Timer from './types/Timer';

export const repeat = (arr: (Interval | Section | Timer)[], n: number) =>
  [].concat(...Array(n).fill(arr));
