import SearchBarController from './search-bar-controller';
import movieService from '../movies-list/movies-list-service';

describe('Search Bar Controller', () => {
  const m = new movieService();
  const sut = new SearchBarController(m);
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

    spyOn(m, 'getVideoByText').and.returnValue($q.when(result));
    spyOn(sut, '__read');

    sut.getVideo('va');
    $timeout.flush();

    expect(sut.__read).toHaveBeenCalledWith(result);
  })
});