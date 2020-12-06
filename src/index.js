import ReactDOM from 'react-dom'
import React from 'react'
import 'babel-polyfill'
import Home from "./view/home";
// import { Provider } from 'react-redux'
// import store from './store/stote-dools'
// import Store from './store/index'
// import Router from './router/index'
// import { setLinkConfig } from '@/router/links-config'
// setLinkConfig()
ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
