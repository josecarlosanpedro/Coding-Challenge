import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import PublicRoutes from './public';
import PrivateRoutes from './private';
import Loading from './Loading'

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const Routes = ({ isLoggedIn }) => {

  return (
    <Fragment>
      <PublicRoutes isLoggedIn={isLoggedIn} />
      {isLoggedIn
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
