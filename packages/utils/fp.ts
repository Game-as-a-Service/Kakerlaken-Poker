export function always<T>(value: T) {
  return () => value;
}

export const not = (a: boolean) => !a;

export const gte = (a: number) => (b: number) => b >= a;
export const lte = (a: number) => (b: number) => b <= a;
