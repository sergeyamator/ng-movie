import AppCtrl from './app-controller';
import app from './app-module';

app.component('app', {
  templateUrl: 'src/app/app.html',
  controller: AppCtrl,
  bindings: {
    movies: '<',
  },
});

export default app;
