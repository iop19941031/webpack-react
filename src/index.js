import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store/index'
// import App from './views/home'
import App from './views/store-dome'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
