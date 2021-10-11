import { RouteMateConfig } from '../types'
import threejsComponent from '@V/threejsexamplets/index.vue'
import atlas from '@V/threejsexamplets/atlas.vue'
const ThreejsRoute:Array<RouteMateConfig> = [
  {
    path:'/threejs',
    name:'threejs',
    meta: {
      title: 'THREEJS'
    },
    redirect: '/threejs/atlas',
    component: threejsComponent,
    children: [
      {
        path: '/threejs/atlas',
        name: '/threejs/atlas',
        meta: {
          title: '3d图谱'
        },
        component: atlas
      }
    ]
  }
]

export default ThreejsRoute