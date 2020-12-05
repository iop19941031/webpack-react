import React from 'react'
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom'
import Links from './links'
import indexScss from './index.scss'
import { linkConfig } from './links-config'
import NoMatch from './no-match/index'
export default function RouteConfigExample() {
  console.log(linkConfig)
  return (
    <div>
      <HashRouter>
        <div>
          <ul className={indexScss.ul}>
            {linkConfig.map((route, id) => (
              <Links key={id} {...route} />
            ))}
          </ul>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/dddd' exact component={WillMatch} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  )
}
function WillMatch() {
  return <h3>Matched!</h3>
}
function Home() {
  return (
    <p>
      A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{' '}
      that matches. A <code>&lt;Route></code> with no <code>path</code> always
      matches.
    </p>
  )
}
