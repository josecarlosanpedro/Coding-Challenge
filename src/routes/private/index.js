import React, { Fragment, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loading from '../Loading';
import privateRoutesList from './private.routes';

const propTypes = {
  auth: PropTypes.shape({}).isRequired,
};

const privateList = [
  ...privateRoutesList,
]

const PrivateRoutes = () => (
  <Fragment>
    <Suspense fallback={<Loading />}>
      <Switch>
        {privateList.map(r => (
          <Route
            key={r.id}
            path={r.path}
            component={r.component}
            exact={r.exact}
          />
        ))
        }
      </Switch>
    </Suspense>
  </Fragment>
)

PrivateRoutes.propTypes = propTypes;

export default PrivateRoutes;
