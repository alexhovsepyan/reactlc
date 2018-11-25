export const emailValidation = email => {
    // email ? email = email.trim() : email
    const pattern =/^(\w+)@([a-z]{2,})\.([a-z]{2,5})$/i;
    if (!email) return {type: 'error',message:'Email Required'}
    else if (!pattern.test(email)) return {type: 'error', message:'Invalid Email Address'}
    else return { type: 'success', message: 'Valid email'}
  }

export const messageValidation = message => {
    // message ? message = message.trim() : message
    if(!message) return { type: 'error', message: 'Message Required'}
    else if(message.length < 6 ) return { type: 'error', message: 'Message is too short'}
    else return {type: 'success', message: ''}
}

