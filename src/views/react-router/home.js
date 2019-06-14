import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import RouteWithSubRoutes from './route_with_sub_routes'
import routes from '../../router/index'

class RouteConfigExample extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/tacos">Tacos</Link>
              </li>
              <li>
                <Link to="/sandwiches">Sandwiches</Link>
              </li>
            </ul>

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </div>
        </Router>
      </div>
    )
  }
}
export default hot(module)(RouteConfigExample)
