import Vue from 'vue'
import Router from 'vue-router'
import splatag from '@/components/splatag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/splatag',
      name: 'splatag',
      component: splatag
    }
  ]
})
