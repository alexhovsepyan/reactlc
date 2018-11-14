import React, { Component } from "react";
import NavigationList from './NavigationList'
import Social from './Social'
import Logo from './Logo'

export default class MenuLeft extends Component {
  render() {
    return (
      <div className='left-menu'>
        <Logo />
        <NavigationList />
        <Social />
      </div>
    );
  }
}
