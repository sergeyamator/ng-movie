import Controller from './movie-controller';

describe('Movie controller', () => {
  const sut = new Controller({
    movieId: 45
  });

  it('should init movie id', () => {
    expect(sut.movieId).toBe(45);
  })
});