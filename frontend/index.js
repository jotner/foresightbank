import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import Register from './components/Register.vue'
import Account from './components/Account.vue'
import About from './components/About.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    }
  ]
})

new Vue({
  created() {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(result => {
      this.users = result
    })
  },
  data: {
    users: null,
    id: null,
    userBalance: null,
    stockBalance: null
  },
  methods: {
    deposit: function() {
      fetch('http://localhost:3000/users', {
        body: JSON.stringify({
          userBalance: this.userBalance,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => {
        return response.text()
      }).then(() => {
        fetch('http://localhost:3000/users')
          .then(response => response.json())
          .then(result => {
            this.users = result
          })
      })
    },
    transformClick: function(id){
      this.id = id
    }
  },
  el: '#app',
  render: h => h(App),
  router: router,
})