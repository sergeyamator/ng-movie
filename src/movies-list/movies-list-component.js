import app from '../app/app-module';
import MoviesController from './movies-list-controller';

import './movies-list.css';

app.component('moviesList', {
  controller: MoviesController,
  controllerAs: 'MoviesController',
  templateUrl: 'src/movies-list/movies-list.html',
  bindings: {
    movies: '=',
  },
});

