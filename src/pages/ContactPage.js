import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.js';
import Contact from '../components/Contact/Contact.js';
import Footer from '../components/Footer/Footer.js';


class HomePage extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Contact name="contact"/>
          <Footer name="footer"/>
      </div>
    );
  }
}

export default HomePage;
