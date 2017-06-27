import config from '../config';
import movieModule from './movie-module';

movieModule.service('movie', movie);

export default function movie($http) {
  this.getVideoByText = getVideoByText;
  this.getVideoById = getVideoById;

  function getVideoByText(text) {
    if (!text) {
      return;
    }

    return $http.get(config.searchMovieUrl + text)
      .then(r => r.data.results);
  }

  function getVideoById(id) {
    const getVideoByIdUrl = `${config.baseMovieUrl}${config.queryMovieById}${id}${config.apiKey}`;

    return $http.get(getVideoByIdUrl)
      .then(r => r.data);
  }
}
