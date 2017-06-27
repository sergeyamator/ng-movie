import angular from 'angular';
import '@uirouter/angularjs';

import '../movie-module/movie-module';

import './styles.css';

const app = angular.module('app', ['ui.router', 'movie']);

export default app;
