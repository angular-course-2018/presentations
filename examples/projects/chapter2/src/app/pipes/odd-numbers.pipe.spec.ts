import { OddNumbersPipe } from './odd-numbers.pipe';

describe('OddNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new OddNumbersPipe();
    expect(pipe).toBeTruthy();
  });
});
