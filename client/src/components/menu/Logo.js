import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.logo = React.createRef();
  }

  render() {
    return (
        <Link to='/'>
             <div className="left-menu_header" onMouseEnter={this.handleAnimation}>
        <h1 className="left-menu_logo" ref={this.logo}>
          V
        </h1>
        <span className="left-menu_logo__desc">Vahe</span>
      </div>
        </Link>
    );
  }
  handleAnimation = () => {
    const logo = this.logo.current;
    logo.animate(
      [
        { transform: "scale(1)",  offset: 0 },
        { transform: "scale(1.3)",  offset: 0.2 },
        { transform: "scale(1.2)",  offset: 0.4 },
        { transform: "scale(1)",  offset: 1 }
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
        delay: 0,
        direction: "alternate",
        fill: "forwards"
      }
    );
  };
}
