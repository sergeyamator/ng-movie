import app from '../app/app-module';
import HomeCtrl from './home-controller';

app.component('home', {
  templateUrl: 'src/home/home.html',
  controller: HomeCtrl,
  bindings: {
    movies: '<',
  },
});

export default app;
