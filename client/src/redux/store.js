import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

window.store = store

export default store