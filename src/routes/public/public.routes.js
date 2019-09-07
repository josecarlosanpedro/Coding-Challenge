import { lazy } from 'react';

const LoginModule = lazy(() =>
  import('../../modules/Login'),
);

const publicRoutes = [
  {
    id: 'loginModule',
    path: '/Login',
    component: LoginModule,
    exact: true,
  },
];

export default publicRoutes;
