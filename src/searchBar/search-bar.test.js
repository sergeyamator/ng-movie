import SearchBarController from './searchBarController';

describe('Search Bar Controller', () => {
  let sut = new SearchBarController();

  it('#clearSearchText', () => {
    sut.searchText = 'longerthaneightchars';
    sut.clearSearchText();

    expect(sut.searchText).toEqual('');
  });
});