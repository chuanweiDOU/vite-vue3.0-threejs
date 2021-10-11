import { RouteMateConfig } from '../types'
import Mixins from '@V/examplets/mixin-examples.vue'
import Provide from '@V/examplets/provide-inject.jsx'
import Stores from '@V/examplets/store-action-mution.jsx'
import ClassNameStyle from '@V/examplets/classname-styles.jsx'
import Refreactive from '@V/examplets/ref-reactive.vue'
import Templaterefs from '@V/examplets/templateref.vue'
import Computeds from '@V/examplets/computed-.vue'
import Watchs from '@V/examplets/watch.vue'
import Watchseffect from '@V/examplets/watchseffect.vue'
import Lifecycle from '@V/examplets/lifecycle.vue'
import dcwStores from '@V/examplets/dcwstore.vue'
import useRoutes from '@V/examplets/use-route.vue'
import useCountDemo from '@V/examplets/use-cont.jsx'

const Examplets: Array<RouteMateConfig> = [
  {
    path: '/use-cont',
    name: '/use-cont',
    component: useCountDemo
  },
  {
    path: '/use-route',
    name: '/use-route',
    component: useRoutes
  },
  {
    path: '/mixins', 
    component: Mixins
  },
  {
    path: '/provide-inject',
    component: Provide
  },
  {
    path: '/store-action-mutation',
    component: Stores
  },
  {
    path: '/classname-stylename',
    component: ClassNameStyle
  },
  {
    path: '/ref-reactive',
    component: Refreactive
  },
  {
    path: '/templaterefs',
    component: Templaterefs
  },
  {
    path: '/computeds',
    component: Computeds
  },
  {
    path: '/watch',
    component: Watchs
  },
  {
    path: '/watcheffect',
    component: Watchseffect
  },
  {
    path: '/lifecycle',
    component: Lifecycle
  },
  {
    path: '/dcwstore',
    component: dcwStores
  },
]

export default Examplets