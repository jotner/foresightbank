import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import Register from './components/Register.vue'
import Account from './components/Account.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Stocks from './components/Stocks.vue'
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
      component: Stocks,
      path: '/stocks'
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})