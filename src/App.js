import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import ZinePage from './pages/ZinePage';
import Imprint from './components/Imprint/Imprint';
import Privacy from './components/Privacy/Privacy';

ReactGA.initialize('UA-133956643-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/imprint" component={Imprint} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/" component={ZinePage} />
      </Switch>
    </Router>
  </div>
);

export default App;
