import A from 'fp-ts/Array';
import { Option } from 'fp-ts/Option';

export const lookupWithNegativeIndex =
  (index: number) =>
  <T>(as: Array<T>): Option<T> =>
    index >= 0 ? A.lookup(index, as) : A.lookup(as.length + index, as);
