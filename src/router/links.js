import React from 'react'
// import { BrowserRouter as HashRouter, Route } from 'react-router-dom'
import MenuLink from './menu-link'
class A extends React.Component {
  render () {
    return (
      <div>
        <li>
          <MenuLink
            activeOnlyWhenExact={this.props.activeOnlyWhenExact}
            to={this.props.to}
            label={this.props.label}
          />
        </li>
      </div>
    )
  }
}

export default A
