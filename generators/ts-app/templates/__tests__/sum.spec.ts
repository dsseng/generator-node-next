import sum from '../src/sum';

describe('sum', () => {
  it('should 2 + 2 = 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
