import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouteWithSubRoutes from '../../store/route-with-sub-routes'
class Tacos extends React.Component {
  render () {
    return (
      <div>
        <h2>Tacos</h2>
        <ul>
          <li>
            <Link to="/tacos/bus">Bus</Link>
          </li>
          <li>
            <Link to="/tacos/cart">Car2t</Link>
          </li>
        </ul>
        {this.props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    )
  }
}
export default hot(module)(Tacos)
