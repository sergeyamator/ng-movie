import './search-bar.css';

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
    this.movie.getVideoByText(text)
      .then((movies) => {
        this.read(movies);
      });
  }

    read(value) {
        this.movies = value.map(v => {
            return {
                name: v.name || v.title,
                src: 'http://image.tmdb.org/t/p/w185' + v.poster_path,
                id: v.id,
                date: v.first_air_date,
                stars: v.vote_average
            };
        });
    }
}

export default SearchBar;

