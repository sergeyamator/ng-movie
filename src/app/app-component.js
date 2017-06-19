import angular from 'angular';
import AppController from './app-controller';

const app = angular.module('app', []);

app.component('app', {
  templateUrl: 'src/app/app.html',
  controller: AppController,
  controllerAs: 'AppController',
});

export default app;
