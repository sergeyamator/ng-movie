import app from '../app/app-module';
import MoviesCtrl from './movies-list-controller';
import './movies-list-service';

import './movies-list.css';

app.component('moviesList', {
  controller: MoviesCtrl,
  templateUrl: 'src/movies-list/movies-list.html',
  bindings: {
    movies: '=',
  },
});

