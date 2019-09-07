import { lazy } from 'react';

const LoginModule = lazy(() =>
  import('../../modules/Login'),
);
const RegistrationModule = lazy(() =>
  import('../../modules/Registration'),
);

const publicRoutes = [
  {
    id: 'loginModule',
    path: '/Login',
    component: LoginModule,
    exact: true,
  },
  {
    id: 'registrationModule',
    path: '/Registration',
    component: RegistrationModule,
    exact: true,
  },
];

export default publicRoutes;
