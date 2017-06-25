import angular from 'angular';
import '@uirouter/angularjs';

const app = angular.module('app', ['ui.router']);

/*app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('movies', {
      url: "/movies",
      template: "<movies-list></movies-list>",
    });
    });
  $urlRouterProvider.otherwise('/movies');
});*/


export default app;
