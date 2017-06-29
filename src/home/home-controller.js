import config from '../config';

class App {
  static get $inject() {
    return ['movie'];
  }

  constructor(movie) {
    this.title = 'Find movie';
    this.searchText = '';
    this.movies = [];
    this.moviesForRender = [];
    this.moviesService = movie;
  }

  onChangeText(text) {
    this.searchText = text;
    this.searchText
      ? this.getVideos()
      : this.clearMovies();
  }

  getVideos() {
    this.moviesService.getVideoByText(this.searchText)
      .then((movies) => {
        this.movies = movies;
        this.__read(this.movies);
      });
  }

  clearMovies() {
    this.movies = [];
    this.moviesForRender = [];
  }

  __read(value) {
    this.moviesForRender = value.map(v => {
      return {
        name: v.name || v.title || 'no title',
        src: v.poster_path ? config.imageSrc + v.poster_path : config.noImageSrc,
        id: v.id,
        date: v.first_air_date,
        stars: v.vote_average,
        popularity: v.popularity,
      };
    });
  }
}

export default App;
