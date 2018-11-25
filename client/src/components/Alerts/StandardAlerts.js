import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaExclamationCircle, FaCheck, FaSpinner, FaTimes} from 'react-icons/fa'
import './StandardAlerts.css'

export default class StandardAlerts extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['error', 'success', 'waiting']).isRequired,
    lookingTime: PropTypes.number,
    position: PropTypes.oneOf(['top','bottom']),
    text: PropTypes.string,
    closeAction: PropTypes.func,
  }
  iconSwitcher = () => {
    const { type } = this.props
    switch(type){
      case 'error': return (< FaExclamationCircle className='alert-error-icon' />)
      case 'success': return (< FaCheck className='alert-success-icon'/>)
      default: return (<FaSpinner  className='alert-waiting-icon'/>)
    }
  }

  render() {
      const { type, position, text, closeAction } = this.props
    return (
      <div className={` alertBox alert-${type} alert-${position}`}>
        <div className='alert-content'>
          {this.iconSwitcher()}
          <span className='alert-text'>{ text }</span>
          <FaTimes className='alert-close' onClick={closeAction} /> 
        </div>
      </div>
    )
  }
  componentDidMount = () => {
    const { closeAction, lookingTime } = this.props
    lookingTime && setTimeout(closeAction,lookingTime)
  }
  
  
}

const styles = {
    box: {
        position: 'absolute',
    }
}
