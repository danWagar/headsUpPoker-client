import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import PrivateRoute from './utils/PrivateRoute';
import Header from './components/Header/Header';
import './App.css';
const LandingPage = lazy(() => import('./routes/LandingPage/LandingPage'));
const Login = lazy(() => import('./routes/Login/Login'));
const Register = lazy(() => import('./routes/Register/Register'));
const Dashboard = lazy(() => import('./routes/Dashboard/Dashboard'));
const Game = lazy(() => import('./routes/Game/Game'));

const App: React.FC = () => {
  return (
    <main className="App_main">
      <div className="App">
        <Header></Header>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PublicOnlyRoute exact path="/login" component={Login} />
          <PublicOnlyRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/game/:id" component={Game} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default withRouter(App);
