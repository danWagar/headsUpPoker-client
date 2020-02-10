import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import TokenService from '../services/token-service';

interface PrivateProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<PrivateProps> = ({ component, ...props }) => {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Component {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: componentProps.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
