import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MenuLeft from "./componets/menu/Menu";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import MyWork from "./pages/MyWork";
import Skills from "./pages/Skills";

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <MenuLeft />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contacts} />
            <Route path="/mywork" exact component={MyWork} />
            <Route path="/skills" exact component={Skills} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
