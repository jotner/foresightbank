import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import Account from './components/Account.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes: [{
    component: Home,
    path: '/'
  },
  {
    component: LogIn,
    path: '/login'
  },
  {
    component: Account,
    path: '/account'
  }]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})