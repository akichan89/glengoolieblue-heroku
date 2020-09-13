import React, { Component } from 'react';
import logo from './glengoolie-logo.png';
import './App.css';

class HeaderBar extends Component {
    
    render () {
  return (
    <div className="header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="glengoolie">
        For the best of times...
      </p>
      </header>

      
    </div>
  );
    }
};


export default HeaderBar;
