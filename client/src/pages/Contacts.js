import React, { Component } from "react";
import ContactForm from "../components/forms/ContactForm";
import StandardAlerts from "../components/Alerts/StandardAlerts";
import AlertController from '../components/Alerts/AlertController'
import "./Styles/contact.css";

import { connect } from "react-redux";
import { resetState } from "../redux/ducks/contactDucks";

class Contacts extends Component {
 
  render() {
    return (
      <div className="contactBox">
        <h1 className="contactBoxTitle">Contact me</h1>
        <span className="contactDesc">
          {" "}
          if you have any questions, please don't hesitate to contact using form
          below...{" "}
        </span>
        <ContactForm />
        <AlertController />
      </div>
    );
  }
  componentWillUnmount = () => {
    this.props.resetState()
  }
  
}

export default connect(
  state => ({
    contactReducer: state.contactReducer
  }),
  {resetState}
)(Contacts);
