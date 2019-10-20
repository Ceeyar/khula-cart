import Home from '../components/home/Home';
import Preview from '../components/children/product-modal/ProductPreview';
import noMatch from '../components/children/error-page/ErrorPage';

const Routes = [
    {
      title: 'Home',
      path: '/',
      component: Home,
      exact: true
    },
    {
      title: 'Product Preview',
      path: '/product',
      component: Preview,
      exact: true
    },
    {
      title: 'Ooopsie 404',
      path: '*',
      component: noMatch,
      exact: false
    }
  ]
  
  export default Routes
  