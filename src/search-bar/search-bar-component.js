import app from '../app/app-component';

import SearchBarController from './search-bar-controller';

app.component('searchBar', {
  templateUrl: 'src/search-bar/search-bar.html',
  controller: SearchBarController,
  controllerAs: 'SearchBarController',
  bindings: {
    searchText: '=',
    movies: '=',
  },
});
