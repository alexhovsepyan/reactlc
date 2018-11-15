import React, { Component } from "react";
import { FaHome, FaUserSecret, FaEnvelope } from "react-icons/fa";
import { TiCogOutline, TiEye } from "react-icons/ti";
import ListElem from "./ListElem";

export default class NavigationList extends Component {
  render() {
    return (
      <nav className="left-menu_content">
        <ul>
          {/* home Link */}
          <ListElem
            to="/"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="Home"
          >
            <FaHome />
          </ListElem>
          {/* about Link */}
          <ListElem
            to="/about"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="About"
          >
            <FaUserSecret />
          </ListElem>
          {/* skills Link */}
          <ListElem
            to="/skills"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="Skills"
          >
            <TiCogOutline />
          </ListElem>
          {/* my works Link */}
          <ListElem
            to="/mywork"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="My Works"
          >
            <TiEye />
          </ListElem>
          {/* contact Link */}
          <ListElem
            to="/contact"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="Contacts"
          >
            <FaEnvelope />
          </ListElem>
        </ul>
      </nav>
    );
  }
}
