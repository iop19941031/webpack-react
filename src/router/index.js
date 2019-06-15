import React from 'react'
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// import RouteWithSubRoutes from './route-with-sub-routes'
// import Routes from './routers-config'
import Links from './links'
import index_css from './index.scss'
import LinksConfig from './links-config'
import NoMatch from '../views/no-match/index'
class RouteConfigExample extends React.Component {
  render () {
    return (
      <div>
        <HashRouter>
          <div>
            <ul className={index_css.ul}>

              {LinksConfig.map((route, id) => (
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
}
function WillMatch () {
  return <h3>Matched!</h3>
}
function Home () {
  return (
    <p>
      A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{' '}
      that matches. A <code>&lt;Route></code> with no <code>path</code> always
      matches.
    </p>
  )
}
export default hot(module)(RouteConfigExample)
