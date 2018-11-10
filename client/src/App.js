import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import MenuLeft from './componets/Menu'

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
