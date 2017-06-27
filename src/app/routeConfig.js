import app from './app-module';

app.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>',
    })
    .state('movie', {
      url: "/movie/:movieId",
      template: '<movie></movie>',
    });

  $urlRouterProvider.otherwise('/home');
});
