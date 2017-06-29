/*
import SearchBarController from './search-bar-controller';
import movieService from '../movie-module/movies-list-service';

describe('Search Bar Controller', () => {
  const service = new movieService();
  const sut = new SearchBarController(service);
  let $q;
  let $timeout;

  beforeEach(inject((_$q_, _$timeout_) => {
    $q = _$q_;
    $timeout = _$timeout_;
  }));

  it('#clearSearchText', () => {
    sut.searchText = 'longerthaneightchars';
    sut.clearSearchText();

    expect(sut.searchText).toEqual('');
  });

  it('#getVideo', () => {
    const result = [];

    spyOn(service, 'getVideoByText').and.returnValue($q.when(result));
    spyOn(sut, '__read');

    sut.getVideo('va');
    $timeout.flush();

    expect(sut.__read).toHaveBeenCalledWith(result);
  });

  it('should map data for view from original data', () => {

  });
});*/
