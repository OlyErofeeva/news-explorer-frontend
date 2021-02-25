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
        if (props.isLoggedIn) {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return (<Component {...props} />);
        }
        return (<Redirect to="/" />);
      }}
    </Route>
  );
}

export default ProtectedRoute;
