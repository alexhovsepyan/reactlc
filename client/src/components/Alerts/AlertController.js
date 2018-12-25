import React, { Component } from 'react'
import StandardAlerts from './StandardAlerts'
import { resetState } from '../../redux/ducks/contactDucks'
import { connect } from 'react-redux'

class AlertController extends Component {
  alertController = () => {
    const {
      sending,
      error,
      success,
      message
    } = this.props.contactReducer;
    if (sending) {
      return (
        <StandardAlerts
          type="waiting"
          position="top"
          text="Messages are sent"
          lookingTime={5000}
          closeAction={this.props.resetState}
        />
      );
    } else if (error) {
      return (
        <StandardAlerts
          type="error"
          position="top"
          text={message}
          lookingTime={5000}
          closeAction={this.props.resetState}
        />
      );
    } else if(success){
      return (
        <StandardAlerts
          type="success"
          position="top"
          text={message}
          lookingTime={5000}
          closeAction={this.props.resetState}
        />
      );
    }
    else{
      return(
        <span />
      )
    }
  }
  render() {
  
    return this.alertController()
  }
}
export default connect(
  state => ({
    contactReducer: state.contactReducer
  }),
  {resetState}
)(AlertController)
