import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pos from '@/components/Pos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    }
  ]
})
