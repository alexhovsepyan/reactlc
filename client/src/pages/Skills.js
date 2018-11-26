import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles/Skills.css";

export default class Skills extends Component {
  render() {
    return (
      <div className="skillsBox">
        <h1 className="skillsTitle">Skills & Experience</h1>
        <p className="skillsDesc">
          My main area of expertise is front end development and mobile
          applications.
        </p>
        <p className="skillsText">
          Building small and medium Web apps using React.
          <br />
          Building cross platform app for android and ios using React Native.
          <br />
          Building custom plugins, features, animations and even coding layouts.
        </p>
        <p className="skillsText">
          From time to I work as a full-stack developes with node js (Express,
          Mongodb, ...)
        </p>
        <p className="skillsText">
          Visit my{" "}
          <a 
          href="https://www.linkedin.com/in/vahe-shakhpazyan-856a67135/"
          target='_blank'
          rel="noopener noreferrer"
          className='skillsLink'
          >
            LinkedIn{" "}
          </a>{" "}
          profile for more details or just <Link to="/contact"><span className='skillsLink'>contact</span> </Link>{" "}
          me
        </p>
      </div>
    );
  }
}
