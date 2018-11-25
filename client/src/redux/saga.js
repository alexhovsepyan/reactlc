import { all } from 'redux-saga/effects'
import { contactWatcher } from './ducks/contactDucks'

export default function* rootSaga (){
    yield all([
        contactWatcher()
    ])
}