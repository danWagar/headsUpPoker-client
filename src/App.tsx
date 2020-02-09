import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './routes/LandingPage/LandingPage';
import './App.css';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <main className="App_main">
      <div className="App">
        <Header></Header>
      </div>

      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
