import movieModule from '../movie-module';
import MoviesCtrl from './movies-list-controller';
import '../movies-service';

import './movies-list.css';

movieModule.component('moviesList', {
  controller: MoviesCtrl,
  templateUrl: 'src/movie-module/movies-list/movies-list.html',
  bindings: {
    movies: '<',
  },
});

