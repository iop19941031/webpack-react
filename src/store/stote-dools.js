import reducer from './reducer'

import { createStore, applyMiddleware } from 'redux'

let store = process.env.NODE_ENV === 'production'
  ? (createStore(reducer, applyMiddleware()))
  : (window.__REDUX_DEVTOOLS_EXTENSION__ ? (createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())) : (createStore(reducer, applyMiddleware())))

export default store
