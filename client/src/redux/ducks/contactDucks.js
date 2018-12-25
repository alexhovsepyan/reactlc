import { call, put, takeLatest} from 'redux-saga/effects'

import {sendContactMessage} from '../../api'

export const SEND_MESSAGE = "contactDucks/SEND_MESSAGE";
export const SEND_MESSAGE_SUCCESS = "contactDucks/SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_SLIP = "contactDucks/SEND_MESSAGE_SLIP";
export const RESET_STATE = "contactDucks/RESET_STATE"

export const SEND_MESSAGE_SAGA = "contactDucks/SEND_MESSAGE_SAGA"


export const resetState = () => ({
  type: RESET_STATE,
})
export const sendMessageSage = (data) => ({
    type: SEND_MESSAGE_SAGA,
    payload: data
})

//  loading -> true
export const sendMassage = () => ({
  type: SEND_MESSAGE,
  payload: { sending: true, massage: "Please wait." }
});

// loading -> false
// success -> true
export const messageSuccess = data => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: {
    success: true,
    sending: false,
    message: "Message sent successfully"
  }
});

// loading -> false
// error -> true
export const messageSlip = (message) => ({
  type: SEND_MESSAGE_SLIP,
  payload: {
    sending: false,
    error: true,
    message
  }
});


// initial state 
const initialState = {
  sending: false,
  error: false,
  success: false,
  message: ""
};

// reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE:
      return payload;
    case SEND_MESSAGE_SLIP:
      return payload;
    case SEND_MESSAGE_SUCCESS:
      return payload;
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

// send message worker 

function* sendMassageWorker(action){
  try {
    const res = yield call(sendContactMessage,action.payload)
    const response = yield res.json()
    if(response.type === 'error'){
      let errorMessage
      if(response.email){
        errorMessage = response.email.message
      }else if(response.message){
        errorMessage = response.message.message
      }else{
        errorMessage = 'An error has occurred.'
      }
      const errorAction = yield call(messageSlip, errorMessage)
      yield put(errorAction)
    }else if(response.type === 'success'){
      const successAction = yield call(messageSuccess)
      yield put(successAction)
    }
  } catch (e) {
    console.log(e)
  }
   
}

// watcher
export function* contactWatcher (){
    yield takeLatest(SEND_MESSAGE_SAGA, sendMassageWorker)
}