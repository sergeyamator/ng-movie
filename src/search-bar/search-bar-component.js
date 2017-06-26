import app from '../app/app-component';

import './search-bar.css';

import SearchBarCtrl from './search-bar-controller';

app.component('searchBar', {
  controller: SearchBarCtrl,
  templateUrl: 'src/search-bar/search-bar.html',
  bindings: {
    searchText: '=',
    movies: '=',
  },
});
