import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ListElem extends Component {
  constructor(props) {
    super(props);
    this.animElem = React.createRef();
    this.animIcon = React.createRef();

    this.state = {
      hover: true
    };
  }
  handleHover = () => {
    const elem = this.animElem.current;
    const animIcon = this.animIcon.current;
    elem.animate([{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }], {
      duration: 300,
      fill: "forwards"
    });

    animIcon.animate([{ opacity: 1, offset: 0 }, { opacity: 0, offset: 1 }], {
      duration: 300,
      fill: "forwards"
    });
  };
  handleRemoveAnim = () => {
    const elem = this.animElem.current;
    const animIcon = this.animIcon.current;
    elem.animate([{ opacity: 1, offset: 0 }, { opacity: 0, offset: 1 }], {
      duration: 300,
      fill: "forwards"
    });

    animIcon.animate([{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }], {
      duration: 300,
      fill: "forwards"
    });
  };
  render() {
    const { to, className, children, activeClassName, name } = this.props;
    return (
      <NavLink
        to={to}
        className={className}
        exact
        activeClassName={activeClassName}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleRemoveAnim}
      >
        <li style={{ marginTop: "10px" }}>
          <div ref={this.animIcon}>{children && children}</div>
          <span ref={this.animElem} className='navLink-active-span'>
            {name}
          </span>
        </li>
      </NavLink>
    );
  }
}

// const styles = {
//   name: {
//     fontSize: "11px",
//     color: "#08fdd8",
//     position: "absolute",
//     textAlign: "center",
//     display: "block",
//     marginTop: -24,
//     width: 50,
//     opacity: 0
//   }
// };
