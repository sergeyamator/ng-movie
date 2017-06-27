import app from '../app/app-module';
import MovieCtrl from './movie-controller';

app.component('movie', {
  templateUrl: 'src/movie/movie.html',
  controller: MovieCtrl,
});
