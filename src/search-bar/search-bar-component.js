import app from '../app/app-component';
import './search-bar-service';

import SearchBarController from './search-bar-controller';

app.component('searchBar', {
  controller: SearchBarController,
  controllerAs: 'SearchBarController',
  templateUrl: 'src/search-bar/search-bar.html',
  bindings: {
    searchText: '=',
    movies: '=',
  },
});
