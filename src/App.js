import React, { Component } from 'react';
import logo from './logo.svg';
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
        <Navigation/>
        <ProfileSummary/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
