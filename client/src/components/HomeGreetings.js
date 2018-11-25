import React, { Component } from "react";

export default class HomeGreetings extends Component {
  render() {
    return (
      <div className='word-box'>
        <span className="word">
          <span className="blast">H</span>
          <span className="blast">i,</span>
        </span>
        <br />
        <span className="word" style={{ marginRight: 20 }}>
          <span className="blast">I</span>
          <span className="blast">'</span>
          <span className="blast">m</span>
        </span>
        <span className="word">
          <span className="blast">V</span>
          <span className="blast">a</span>
          <span className="blast">h</span>
          <span className="blast">e,</span>
        </span>
        <br />
        <span className="word" style={{ marginRight: 20 }}>
          <span className="blast"> J</span>
          <span className="blast">a</span>
          <span className="blast">v</span>
          <span className="blast">a</span>
          <span className="blast">s</span>
          <span className="blast">c</span>
          <span className="blast">r</span>
          <span className="blast">i</span>
          <span className="blast">p</span>
          <span className="blast">t</span>
        </span>
        <span className="word">
          <span className="blast">d</span>
          <span className="blast">e</span>
          <span className="blast">v</span>
          <span className="blast">e</span>
          <span className="blast">l</span>
          <span className="blast">o</span>
          <span className="blast">p</span>
          <span className="blast">e</span>
          <span className="blast">r</span>
          <span className="blast">.</span>
        </span>
        <br />
        <span className="homeDescription">
          Front End Developer / React / React Native
        </span>
      </div>
    );
  }
}
