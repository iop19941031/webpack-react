import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store/stote-dools'
import Home from './views/react-router/home'
import App from './store/index'
import index_css from './index.scss'
ReactDOM.render(
  <Provider store={store}>
    <div className={index_css.a}>SCSS</div>
    <Home />
    <App />
  </Provider>,
  document.getElementById('root')
)
