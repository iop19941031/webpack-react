import Bus from '../views/react-router/bus'
import NoMatch from '../views/no-match/index'
const routes = [
  {
    path: '/',
    activeOnlyWhenExact: true,
    component: Bus
  },
  {
    path: '/tacos',
    component: Bus
  },
  {
    path: '/',
    component: NoMatch
  }
]

export default routes
