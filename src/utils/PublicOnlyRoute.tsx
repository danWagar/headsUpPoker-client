import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import TokenService from '../services/token-service';

interface PublicProps extends RouteProps {
  component: any;
}

const PublicOnlyRoute: React.FC<PublicProps> = ({ component, ...props }) => {
  console.log('in public only route');
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? <Redirect to={'/'} /> : <Component {...componentProps} />
      }
    />
  );
};

export default PublicOnlyRoute;
