import React, { Component } from 'react';

import HeaderBar  from './header-bar';
import './App.css';
import './body.css';
import BodyMain from './mainBody';

class App extends Component {
  render () {
    return (
      <div>
        <HeaderBar />
      <br />
      
        <BodyMain />
      </div>
    );

  }


}
export default App;

