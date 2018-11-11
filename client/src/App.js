import React, { Component } from 'react';
import './App.css';
import MenuLeft from './componets/menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <MenuLeft/>
      </div>
    );
  }
}

export default App;
