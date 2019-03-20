import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.js';
import FAQ from '../components/FAQ/FAQ.js';
import Footer from '../components/Footer/Footer.js';


class FAQPage extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <FAQ/>
        <Footer name="footer"/>
      </div>
    );
  }
}

export default FAQPage;
