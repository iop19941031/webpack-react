import Bus from './views/bus'
import Sandwiches from './views/sandwiches'
import A from './views/aa'
import Tacos from './views/tacos'
const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: A
      }
    ]
  }
]

export default routes
