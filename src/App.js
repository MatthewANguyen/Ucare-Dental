import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer.js';
import HomePage from './pages/HomePage.js';
import './App.css';

function App() {
    return (
      <div className="App">
      <Router>
      <Route path="/" exact component={HomePage} />
      </Router>
      </div>
    );
  }

export default App;