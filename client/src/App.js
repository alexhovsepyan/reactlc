import React, { Component } from "react";
import "./App.css";

// left menu 
import MenuLeft from "./components/menu/Menu";

// Root router
import MainRoot from './MainRoot'


class App extends Component {
  render() {
    return (
      <div className="wrap">
        <MenuLeft />
        <div>
          <MainRoot />
        </div>
      </div>
    );
  }
}

export default App;
