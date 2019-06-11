import React from 'react'
import { hot } from 'react-hot-loader'

import a from './aa.less'
class Appa extends React.Component {
  render () {
    return (
      <div>
        <h1 className="w">aajs</h1>
        <h1 className={a.ww}>aajs</h1>
      </div>
    )
  }
}
export default hot(module)(Appa)
