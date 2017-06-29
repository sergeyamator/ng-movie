import Controller from './movies-list-controller';

describe('Movie List Controller', () => {
  const sut = new Controller();

  it('#getStarsArray', () => {
    expect(sut.getStarsArray(5)).toEqual([1, 2, 3, 4, 5]);
  });
});