import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Route } from 'react-router-dom'

class RouteWithSubRoutes extends React.Component {
  render () {
    return (
      <div>
        <Route
          path={this.props.path}
          exact={this.props.activeOnlyWhenExact}
          render={b => (
            <this.props.component {...b} routes={this.props.routes} />
          )}
        />
      </div>
    )
  }
}
export default hot(module)(RouteWithSubRoutes)
