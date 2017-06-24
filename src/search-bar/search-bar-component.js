import app from '../app/app-component';
import './search-bar-service';

import './search-bar.css';

import SearchBarController from './search-bar-controller';

app.component('searchBar', {
  controller: SearchBarController,
  controllerAs: 'SearchBarController',
  bindings: {
    searchText: '=',
    movies: '=',
  },
});
