import React from 'react'
import { hot } from 'react-hot-loader'
import Appa from './aa'
// import './a.scss'
import a from './a.less'
class App extends React.Component {
  render () {
    return (
      <div>
        <Appa />
        <h1 className={a.ww}>homejs</h1>
      </div>
    )
  }
}
export default hot(module)(App)
