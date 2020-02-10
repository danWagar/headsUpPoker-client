import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import PrivateRoute from './utils/PrivateRout';
import Header from './components/Header/Header';
import LandingPage from './routes/LandingPage/LandingPage';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import './App.css';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <main className="App_main">
      <div className="App">
        <Header></Header>
      </div>

      <Route>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PublicOnlyRoute exact path="/login" component={Login} />
          <PublicOnlyRoute exact path="/register" component={Register} />
          {/*<PrivateRoute exact path="/game/:id" component={(props) => <Game id={props.match.params.id}} />} */}
        </Switch>
      </Route>
    </main>
  );
};

export default withRouter(App);
