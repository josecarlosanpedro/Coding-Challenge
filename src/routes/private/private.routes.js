import { lazy } from 'react';

const HomeModule = lazy(() =>
  import('../../modules/Home'),
);

const privateRoutes = [
  {
    id: 'homeModule',
    path: '/Home',
    component: HomeModule,
    exact: true,
  },
];

export default privateRoutes;
