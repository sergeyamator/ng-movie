import app from './app-module';
import AppController from './app-controller';

app.component('app', {
  templateUrl: 'src/app/app.html',
  controller: AppController,
});

export default app;
