import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Team from './components/Team/Team.js';
import Office from './components/Office/Office.js';
import Services from './components/Services/Services.js';
import About from './components/About/About.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Home name="home"/>
          <Team name="team"/>
          <Services name="services"/>
          <Office name="office"/>
          <About name="about"/>
          <Footer name="footer"/>
      </div>
    );
  }
}

export default App;
