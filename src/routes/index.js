import React, { useState, useEffect, Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import PublicRoutes from './public';
import Loading from './Loading'

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const Routes = ({ isLoggedIn }) => {
  console.log(isLoggedIn, 'isLoggedIn')
  const [PrivateRoutes, setPrivateRoutes] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const privateLazy = lazy(() => import('./private'));
      setPrivateRoutes(privateLazy);
    }
  }, [isLoggedIn]);
  return (
    <Fragment>
      <PublicRoutes isLoggedIn={isLoggedIn} />
      {isLoggedIn && PrivateRoutes
        && (
          <Suspense fallback={<Loading />}>
            <PrivateRoutes />
          </Suspense>
        )
      }
    </Fragment>
  );
};

Routes.propTypes = propTypes;
export default Routes;
