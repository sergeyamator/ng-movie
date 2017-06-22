import AppController from './app-controller';
import app from './app-module';

app.component('app', {
  templateUrl: 'src/app/app.html',
  controller: AppController,
  controllerAs: 'AppController',
});

export default app;