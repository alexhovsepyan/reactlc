import React, { Component } from 'react'
import StandardButton from '../Buttons/ StandardButton'
import { emailValidation, messageValidation } from '../../helpers/validations'
import { connect} from 'react-redux'

import {sendMessageSage, messageSlip} from '../../redux/ducks/contactDucks'
class ContactForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      massage: '',
    }
  }
  handleChange = (type, value) => {
    if(type === 'name' || 'email' || 'massage'){
      this.setState({ [type]: value})
    }
  }
  handleSend = (e) => {
    e.preventDefault()
    const {email, massage} = this.state

    const emailVal = emailValidation(email)
    const messageVal = messageValidation(massage)
    if(emailVal.type === 'success' && messageVal.type === 'success'){
      this.props.sendMessageSage(JSON.stringify(this.state))
    }else if(emailVal.type === 'error'){
      this.props.messageSlip(emailVal.message)
    }else if(messageVal.type){
      this.props.messageSlip(messageVal.message)
    }
    
  }
  render() {
    return (
     <form className='contactForm'>
       <input 
        placeholder='Name'
        type='text'
        value={this.state.name}
        onChange={(e) => this.handleChange('name', e.target.value)}
        />
        <input 
        placeholder='Email'
        type='email'
        value={this.state.email}
        onChange={(e) => this.handleChange('email', e.target.value)}
        required
        />

        <textarea 
            placeholder='Message'
            type='text'
            value={this.state.massage}
            onChange={(e) => this.handleChange('massage', e.target.value)}
            required
        />
        <StandardButton
          title='send'
          action={this.handleSend}
        />
     </form>
    )
  }
}

export default connect(state => ({}), {sendMessageSage, messageSlip})(ContactForm)