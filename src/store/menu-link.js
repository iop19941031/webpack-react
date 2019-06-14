import React from 'react'
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom'
class MenuLink extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? 'active' : ''}>
            {match ? '> ' : ''}
            <Link to={this.props.to}>{this.props.label}</Link>
          </div>
        )}
      />
    )
  }
}

export default MenuLink
