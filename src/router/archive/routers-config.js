import Bus from '../../views/react-router/bus'
import React from 'react'
// import NoMatch from '../views/no-match/index'
const routes = [

  {
    path: '/dddd',
    component: WillMatch
  },
  {
    path: '/home',
    component: WillMatch
  },
  {
    component: NoMatch
  }
]

function Home () {
  return (
    <p>
      A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{' '}
      that matches. A <code>&lt;Route></code> with no <code>path</code> always
      matches.
    </p>
  )
}

function WillMatch () {
  return <h3>Matched!</h3>
}

function NoMatch ({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
export default routes
