import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import Register from './components/Register.vue'
import Account from './components/Account.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Payments from './components/Payments.vue'
import Stocks from './components/Stocks.vue'
import Settings from './components/Settings.vue'
import Management from './components/Management.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

Vue.use(VueRouter)
Vue.use(Buefy)

const router = new VueRouter({
  routes: [{
      component: Home,
      path: '/'
    },
    {
      component: LogIn,
      path: '/login'
    },
    {
      component: Register,
      path: '/register'
    },
    {
      component: Account,
      path: '/account'
    },
    {
      component: About,
      path: '/about'
    },
    {
      component: Contact,
      path: '/contact'
    },
    {
      component: Payments,
      path: '/account/payments'
    },
    {
      component: Stocks,
      path: '/account/stocks'
    },
    {
      component: Settings,
      path: '/account/settings'
      path: '/stocks'
    },
    {
      component: Management,
      path: '/account/management'
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})