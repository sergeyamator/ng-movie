import movie from '../movies-list-service';

class Movie {
  static get $inject() {
    return ['$stateParams', 'movie'];
  }

  constructor($stateParams, movie) {
    this.movieId = $stateParams.movieId;
    movie.getVideoById(this.movieId).then(q => console.log(q));
  }
}

export default Movie;
