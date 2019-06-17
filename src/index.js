import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import store from './store/stote-dools'
import Home from './router/index'
import App from './store/index'
import index_css from './index.scss'
ReactDOM.render(
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My webpack</title>
    </Helmet>
    <Provider store={store}>
      <div className={index_css.a}>SCSS</div>
      <Home />
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)
