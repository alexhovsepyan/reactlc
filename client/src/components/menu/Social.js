import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";


export default class Social extends Component {
  render() {
    return (
      <ul className="left-menu_footer">
        <li style={{marginTop: '10px'}}>
          <a
            target="_blank"
            className="social-link"
            rel="noopener noreferrer" 
            href="https://www.facebook.com/vahe.shakhpazyan"
          >
            <FaFacebookF />
          </a>
        </li>
        <li style={{marginTop: '10px'}}>
          <a
            target="_blank"
            className="social-link"
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/vahe-shakhpazyan-856a67135/"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li style={{marginTop: '10px'}}>
          <a
            target="_blank"
            rel="noopener noreferrer" 
            className="social-link"
            href="https://github.com/VaheShaxpazyan"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    );
  }
}
