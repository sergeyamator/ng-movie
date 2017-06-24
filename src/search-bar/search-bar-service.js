import config from '../config';
import appModule from '../app/app-module';

appModule.service('movieService', movie);

function movie($http) {
  this.getVideoByText = getVideoByText;

  function getVideoByText(text) {
    return $http.get(config.movieApiUrl + text);
  }
}
