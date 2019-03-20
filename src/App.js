import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer.js';
import HomePage from './pages/HomePage.js';
import FAQPage from './pages/FAQPage.js';
import './App.css';

function App() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/FAQ" exact component={FAQPage} />
        </div>
      </Router>
      </div>
    );
  }

export default App;