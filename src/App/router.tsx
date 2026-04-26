import MainLayout from '@/components/layout/MainLayout';
import ProductDetails from '@/pages/ProductDetails';
import ProductList from '@/pages/ProductList';
import { createBrowserRouter } from 'react-router';

import routerUrls from './routerUrls';

console.log('hello!');
const router = createBrowserRouter([
  {
    path: routerUrls.product.list.mask,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: routerUrls.product.item.mask,
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
