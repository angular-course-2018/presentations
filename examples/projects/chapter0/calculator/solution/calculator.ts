export interface Calculator<T> {
  calc(...args: unknown[]): T;
}
