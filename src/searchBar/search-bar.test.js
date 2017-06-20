import app from '../app/app-module';
import SearchBarController from './searchBarController';

describe('Search Bar Controller', () => {
  let sut;

  beforeEach(() => {
    angular.mock.module(app);
  });


  beforeEach(angular.mock.inject((_$controller_) => {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    sut = _$controller_(SearchBarController, {
          $scope: {},
      });
  }));

  it('#clearSearchText ', () => {
    sut.searchText = 'longerthaneightchars';
    sut.clearSearchText();

    expect(sut.searchText).toEqual('');
  });
});