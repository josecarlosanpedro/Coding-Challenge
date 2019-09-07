import React, { Fragment, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import publicRoutesList from './public.routes'

const publicRoutes = [...publicRoutesList];

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const PublicRoutes = ({ isLoggedIn }) => (
  <Fragment>
    <Suspense fallback={<Loading />}>
      <Switch>
        {publicRoutes.map(r => (
          <Route
            key={r.id}
            exact
            component={r.component}
            path={r.path}
          />
        ))}
        {!isLoggedIn && <Redirect to="/login" />}
      </Switch>
    </Suspense>
  </Fragment>
)

PublicRoutes.propTypes = propTypes;

export default PublicRoutes;
