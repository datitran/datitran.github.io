import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import Talks from './components/Talks/Talks';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer';
import ProfileSummary from './components/ProfileSummary/ProfileSummary';
import About from './components/About/About';
import Home from './components/Home/Home';
import Imprint from './components/Imprint/Imprint';
import Privacy from './components/Privacy/Privacy'

ReactGA.initialize('UA-133956643-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Navigation />
            <ProfileSummary />
            <Route exact={true} path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/posts' component={Posts} />
            <Route path='/talks' component={Talks} />
            <Route path='/about' component={About} />
            <Route path='/imprint' component={Imprint} />
            <Route path='/privacy' component={Privacy} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
