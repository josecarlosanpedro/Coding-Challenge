import React, { Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import PublicRoutes from './public';
import PrivateRoutes from './private';
import Loading from './Loading'

const propTypes = {
  isLoggedIn: PropTypes.string.isRequired,
};

const Routes = ({ isLoggedIn }) => {
  return (
    <Fragment>
      <PublicRoutes isLoggedIn={isLoggedIn} />
      {isLoggedIn
        && (
          <Suspense fallback={<Loading />}>
            <PrivateRoutes isLoggedIn={isLoggedIn} />
          </Suspense>
        )
      }
    </Fragment>
  );
};

Routes.propTypes = propTypes;
export default Routes;
