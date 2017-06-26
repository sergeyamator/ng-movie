import SearchBarController from './search-bar-controller';
import movieService from '../movies-list/movies-list-service';

describe('Search Bar Controller', () => {
  const sut = new SearchBarController();


  it('#clearSearchText', () => {
    sut.searchText = 'longerthaneightchars';
    sut.clearSearchText();

    expect(sut.searchText).toEqual('');
  });

  it('#getVideo', () => {
    const result = {

    }

    spyOn(movieService, 'getVideoByText').andReturn($q.when());
  })
});