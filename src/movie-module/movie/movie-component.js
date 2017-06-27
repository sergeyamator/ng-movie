import movieModule from '../movie-module';
import MovieCtrl from './movie-controller';

movieModule.component('movie', {
  templateUrl: 'src/movie-module/movie/movie.html',
  controller: MovieCtrl,
});
