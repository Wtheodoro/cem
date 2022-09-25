/* eslint-disable functional/functional-parameters */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export function classNames(...classes: readonly string[]) {
  return classes.filter(Boolean).join(' ');
}
