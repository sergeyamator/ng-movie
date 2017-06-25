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
        this.movies = movies;
      });
  }

  // TODO
  /*  read(value) {
   this.movies = value.map(v => {
   return {
   name: v.title || v.name,
   src: v.src,
   id: 'id',
   };
   });
   }*/
}

export default SearchBar;

