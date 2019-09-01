import ReactDOM from 'react-dom'
import React from 'react'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import store from './store/stote-dools'
import Home from './router/index'
import Store from './store/index'
import indexScss from './index.scss'
ReactDOM.render(
  <div>
    <div>
      <Provider store={store}>
        <div className={indexScss.a}>SCSS</div>
        <Store />
      </Provider>
      <Home />
    </div>
  </div>,
  document.getElementById('root')
)
