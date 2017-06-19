const angular = require('angular');
require('angular-mocks');

describe('Search Bar Controller', () => {
  let Controller;
  let sut;

  beforeEach(() => {
    angular.mock.module('app');
  });

  beforeEach(inject(_$controller_ => {
    Controller = _$controller_;
    sut = new Controller();
  }));

  it('should ', () => {
    expect(sut.searchText).toEqual('s');
  });
});