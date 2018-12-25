import React, { Component } from "react";
import HomeGreetings from "../components/HomeGreetings";
import StandardButton from "../components/Buttons/ StandardButton";
import "./Styles/animation.css";
import "./Styles/home.css";

export default class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="homeWrapper">
        <HomeGreetings />
        <StandardButton
          title="CONTACT ME"
          action={() => history.push("/contact")}
        />
      </div>
    );
  }
}
