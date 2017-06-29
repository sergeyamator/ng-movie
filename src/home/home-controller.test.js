import Controller from './home-controller';
import movieService from '../movie-module/movies-service'

describe('Search Bar Controller', () => {
  const service = new movieService();
  const sut = new Controller(service);
  let $q;
  let $timeout;

  beforeEach(inject((_$q_, _$timeout_) => {
    $q = _$q_;
    $timeout = _$timeout_;
  }));

  describe('#clearMovies', () => {
    it('should clear movies list', () => {
      sut.clearMovies();

      expect(sut.movies).toEqual([]);
    });

    it('should clear movies for render list', () => {
      expect(sut.moviesForRender).toEqual([]);
    });
  });


  describe('#onChangeText', () => {
    it('should call getVideos function', () => {
      spyOn(sut, 'getVideos');
      sut.onChangeText('vampire');

      expect(sut.getVideos).toHaveBeenCalled();
    });

    it('should call clearMovies function', () => {
      spyOn(sut, 'clearMovies');
      sut.onChangeText('');

      expect(sut.clearMovies).toHaveBeenCalled();
    });
  });

  /*
   it('#getVideos', () => {
   const result = [];

   spyOn(service, 'getVideoByText').and.returnValue($q.when(result));
   spyOn(sut, '__read');

   sut.getVideo('va');
   $timeout.flush();

   expect(sut.__read).toHaveBeenCalledWith(result);
   });
   */

  /* it('should map data for view from original data', () => {

   });*/
});
