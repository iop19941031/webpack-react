import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom'
export default function MenuLink (props) {
  return (
    <Route
      path={props.to}
      exact={props.activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={props.to}>{props.label}</Link>
        </div>
      )}
    />
  )
}

MenuLink.propTypes = {
  activeOnlyWhenExact: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string
}
