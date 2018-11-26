import React, { Component } from "react";
import './Styles/About.css'

export default class About extends Component {
  render() {
    return (
      <div className='aboutBox'>
        <h1 className='aboutTitle'>About me</h1>
        <div>
          <h3 className='sectionTitle'>Eduction</h3>
          <p className='aboutText'>
            <span>National Polytechnic University of Armenia - bachelor</span><br/>
            <span>2009 - 2013</span><br/>
            <span>Faculty of Electrotechnic</span>
          </p>
        </div>
        <div>
          <h3 className='sectionTitle'>Experience</h3>
          <p className='aboutText'>
            WeDoApps LLC, Gyumri ,Shirak Province{" "}
            <span className='aboutTextLight'>- JavaScript developer</span><br/>
            <span> 01/ 2018 - 08/2018</span>
          </p>
          <p className='aboutText'>
            gHost Services LLC, Gyumri ,Shirak Province{" "}
            <span className='aboutTextLight'>- JavaScript developer</span><br/>
            <span> 08/ 2018 - PRESENT </span>
          </p>
        </div>
      </div>
    );
  }
}
