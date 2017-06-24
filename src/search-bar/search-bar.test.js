import SearchBarController from './search-bar-controller';

describe('Search Bar Controller', () => {
  const sut = new SearchBarController();

  it('#clearSearchText', () => {
    sut.searchText = 'longerthaneightchars';
    sut.clearSearchText();

    expect(sut.searchText).toEqual('');
  });
});