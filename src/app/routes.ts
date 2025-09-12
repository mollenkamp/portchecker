import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
<<<<<<< HEAD
    title: 'Home Page',
=======
    title: 'Home page',
>>>>>>> origin/main
  },
  {
    path: 'details/:id',
    component: Details,
<<<<<<< HEAD
    title: 'Home Details',
=======
    title: 'Home details',
>>>>>>> origin/main
  },
];

export default routeConfig;
