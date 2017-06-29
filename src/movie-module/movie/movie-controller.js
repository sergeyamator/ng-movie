class Movie {
  static get $inject() {
    return ['$stateParams', 'movie'];
  }

  constructor($stateParams, movie) {
    this.movieId = $stateParams.movieId;
    movie.getVideoById(this.movieId).then(r => this.__read(r));
  }

  __read(movieData) {
    const genres = movieData.genres.map(genre => genre.name);

    this.movie = {
      country: movieData.origin_country,
      date: movieData.first_air_date,
      imgSrc: movieData.backdrop_path || movieData.poster_path,
      homepageUrl: movieData.homepage,
      id: movieData.id,
      language: movieData.original_language,
      numberOfEpisodes: movieData.number_of_episodes,
      number_of_seasons: movieData.number_of_seasons,
      overview: movieData.overview,
      popularity: movieData.popularity,
      title: movieData.original_name,
      genres,
    };

    console.log(this.movie);
  }
}

export default Movie;
