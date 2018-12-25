import React, { Component } from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoIosPerson, IoIosCog, IoIosHome, IoIosEye } from 'react-icons/io'
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
            <IoIosHome />
          </ListElem>
          {/* about Link */}
          <ListElem
            to="/about"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="About"
          >
            <IoIosPerson />
          </ListElem>
          {/* skills Link */}
          <ListElem
            to="/skills"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="Skills"
          >
            <IoIosCog />
          </ListElem>
          {/* my works Link */}
          <ListElem
            to="/mywork"
            className="left-menu_content__elem"
            activeClassName="left-menu_content__elem_active"
            name="Works"
          >
            <IoIosEye />
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
