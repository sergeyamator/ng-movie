import app from '../app/app-module';

describe('Search Bar Controller', () => {
  let sut;

  beforeEach(() => {
    angular.module('app');
  });


  beforeEach(angular.mock.inject((_$controller_) => {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    sut = _$controller_('SearchBarController', {
      $scope: {},
    });
  }));

  it('should ', () => {
    const title = 'longerthaneightchars';
    expect(title).toEqual(title);
  });
});