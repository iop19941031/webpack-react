import React from 'react'
import { BrowserRouter as HashRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import RouteWithSubRoutes from './route_with_sub_routes'
import routes from '../../router/config'
import MenuLink from '../../router/menu-link'
class RouteConfigExample extends React.Component {
  render () {
    return (
      <div>
        <HashRouter>
          <div>
            <ul>
              <li>
                <MenuLink activeOnlyWhenExact={true} to="/tacos" label="Tacos" />
              </li>
              <li>
                <MenuLink to="/sandwiches" label="Sandwiches" />
              </li>
              <li>
                <MenuLink to="/d" label="d" />
              </li>
            </ul>

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default hot(module)(RouteConfigExample)
