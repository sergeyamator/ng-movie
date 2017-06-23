import app from '../app/app-component';

import SearchBarController from './searchBarController';

app.component('searchBar', {
  templateUrl: 'src/searchBar/search-bar.html',
  controller: SearchBarController,
  controllerAs: 'SearchBarController',
  bindings: {
    searchText: '<',
    clearSearchText: '&',
  },
});
