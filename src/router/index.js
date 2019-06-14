import React from 'react'
import { BrowserRouter as HashRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import RouteWithSubRoutes from '../store/route-with-sub-routes'
import routes from './config'
import MenuLink from './menu-link'
class RouteConfigExample extends React.Component {
  render () {
    return (
      <div>
        <HashRouter>
          <div>
            <ul>
              <li>
                <MenuLink activeOnlyWhenExact={true} to="/" label="Tacos" />
              </li>
              <li>
                <MenuLink to="/sandwiches" label="Sandwiches" />
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
