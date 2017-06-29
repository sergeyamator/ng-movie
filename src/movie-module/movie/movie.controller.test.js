/*
import Controller from './movie-controller';
import movieService from '../movies-service';

describe('Movie controller', () => {
  let $q;
  let $timeout;

  let sut;
  let service;

  beforeEach(inject((_$q_, _$timeout_, _movieService_) => {
    $q = _$q_;
    $timeout = _$timeout_;
    service = movieService;

     sut = new Controller({
    movieId: 45
  }, service);

  }));

  beforeEach(() => {
    const result = {
      id: '1',
      name: 'movie',
      country: 'us'
    };

    spyOn(service, 'getVideoById').and.returnValue($q.when(result));
    //spyOn(sut, '__read');
    //$timeout.flush();
  });

  it('should init movie id', () => {
    // expect(sut.movieId).toBe(45);
  })
});
*/
