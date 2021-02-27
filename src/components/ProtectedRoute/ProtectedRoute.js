import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({
  path,
  exact,
  component: Component, ...props
}) {
  return (
    <Route path={path} exact={exact}>
      {() => {
        if (localStorage.getItem('token')) {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return (<Component {...props} />);
        }
        return (
          <Redirect
            to={{
              pathname: '/',
              state: { noAuthRedirect: true },
            }}
          />
        );
      }}
    </Route>
  );
}

export default ProtectedRoute;
