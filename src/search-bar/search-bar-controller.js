import config from '../config';

class SearchBar {
  static get $inject() {
    return ['movie'];
  }

  constructor(movie) {
    this.movie = movie;
  }

  clearSearchText() {
    this.searchText = '';
    this.movies = [];
  }

  getVideo(text) {
    if (!text) {
      this.movies = '';
      return;
    }

    this.movie.getVideoByText(text)
      .then((movies) => {
        this.__read(movies);
      });
  }

  __read(value) {
    this.movies = value.map(v => {
      return {
        name: v.name || v.title || 'no title',
        src: v.poster_path ? config.imageSrc + v.poster_path : config.noImageSrc,
        id: v.id,
        date: v.first_air_date,
        stars: v.vote_average,
      };
    });
  }
}

export default SearchBar;

