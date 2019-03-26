import React from 'react';
import  {BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import FAQPage from './pages/FAQPage.js';
import ContactPage from './pages/ContactPage.js';
import './App.css';

function App() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/FAQ" exact component={FAQPage} />
          <Route path="/Contact" exact component={ContactPage} />
        </div>
      </Router>
      </div>
    );
  }

export default App;