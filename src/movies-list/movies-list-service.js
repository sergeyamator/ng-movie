import config from '../config';
import appModule from '../app/app-module';

appModule.service('movie', movie);

export default function movie($http) {
  this.getVideoByText = getVideoByText;
  this.getVideoById = getVideoById;

  function getVideoByText(text) {
    if (!text) {
      return;
    }

    if(text === 'vampire') {
      debugger
    }

    return $http.get(config.searchMovieUrl + text)
      .then(r => r.data.results);
  }

  function getVideoById(id) {
    return $http.get(`${config.baseMovieUrl}${id}${config.queryMovieId}`)
      .then(r => r.data);
  }
}
