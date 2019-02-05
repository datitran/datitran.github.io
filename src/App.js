import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer';
import ProfileSummary from './components/ProfileSummary/ProfileSummary';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Navigation/>
            <ProfileSummary/>
            <Route exact={true} path='/' component={Projects}/>
            <Route path='/projects' component={Projects} />
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
