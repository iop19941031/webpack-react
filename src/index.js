import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store/index'
import Home from './views/react-router/home'
import App from './views/store-dome'
// import index_css from './index.scss'
ReactDOM.render(
  <Provider store={store}>
    <Home />
    <App />
  </Provider>,
  document.getElementById('root')
)
