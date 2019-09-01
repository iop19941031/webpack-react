import React from 'react'
import PropTypes from 'prop-types'
export default function NoMatch (props) {
  return (
    <div>
      <h3>
        No match for <code>{props.location.pathname}</code>
      </h3>
    </div>
  )
}
NoMatch.propTypes = {
  location: PropTypes.object
}
