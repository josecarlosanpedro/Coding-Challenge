import React, { Fragment, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import publicRoutesList from './public.routes'
import NotFound from '../../components/Common/NotFound'

const publicRoutes = [...publicRoutesList];

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const PublicRoutes = ({ isLoggedIn }) => {
  return (
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

          {!isLoggedIn &&
            <Route path="*" component={() => <NotFound />} />
          }
        </Switch>
      </Suspense>
    </Fragment>
  )
}

PublicRoutes.propTypes = propTypes;

export default PublicRoutes;
