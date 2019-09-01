import ReactDOM from 'react-dom'
import React from 'react'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import store from './store/stote-dools'
import Store from './store/index'
import indexScss from './index.scss'
import Router from './router/index'
ReactDOM.render(
  <div>
    <div>
      <Provider store={store}>
        <div className={indexScss.a}>SCSS</div>
        <Store />
      </Provider>
      <Router />
    </div>
  </div>,
  document.getElementById('root')
)
