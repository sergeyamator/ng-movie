import app from '../app/app-component';

import SearchBarCtrl from './search-bar-controller';
import './search-bar.css';

app.component('searchBar', {
  controller: SearchBarCtrl,
  templateUrl: 'src/search-bar/search-bar.html',
  bindings: {
    searchText: '<',
    onChangeText: '&',
  },
});
