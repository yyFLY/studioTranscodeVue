import Vue from 'vue'
import Router from 'vue-router'
import setInput from '@/components/setInput/setInput'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'setInput',component: setInput}
  ]
})
