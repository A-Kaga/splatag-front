import Vue from 'vue'
import Router from 'vue-router'
import splatag from '@/components/splatag'
import program from '@/components/program'
import developer from '@/components/developer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/splatag',
      name: 'splatag',
      component: splatag
    },
    {
      path: '/program',
      name: 'program',
      component: program
    },
    {
      path: '/developer',
      name: 'developer',
      component: developer
    },

  ]
})
