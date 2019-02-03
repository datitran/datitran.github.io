import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Projects from './containers/Projects/Projects'
import Footer from './components/Footer';
import ProfileSummary from "./components/ProfileSummary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <ProfileSummary/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
