import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.js';
import Home from '../components/Home/Home.js';
import Featured from '../components/Featured/Featured.js';
import Team from '../components/Team/Team.js';
import Office from '../components/Office/Office.js';
import Services from '../components/Services/Services.js';
import About from '../components/About/About.js';
import Footer from '../components/Footer/Footer.js';


class HomePage extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Home name="home"/>
          <Featured name="featured"/>
          <Team name="team"/>
          <Office name="office"/>
          <About name="about"/>
          <Footer name="footer"/>
      </div>
    );
  }
}

export default HomePage;
