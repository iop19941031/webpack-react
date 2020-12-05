import React from 'react'
// import { BrowserRouter as HashRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import MenuLink from './menu-link'
export default function Links(props) {
  return (
    <div>
      <li>
        <MenuLink
          activeOnlyWhenExact={props.activeOnlyWhenExact}
          to={props.to}
          label={props.label}
        />
      </li>
    </div>
  )
}
Links.propTypes = {
  activeOnlyWhenExact: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string
}
