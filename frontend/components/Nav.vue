<template>
<section class="hero is-medium is-bold">
  <div class="hero-head head-menu">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img src="media/foresightloggasvart2.0.png">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class="tabs is-right">
              <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
                <li>
                  <router-link to="/account" v-if="userOnline">Account</router-link>
                </li>
                <li>
                  <router-link to="/login" v-if="!userOnline">
                    <a>
                      <span class="icon">
                        <i class="fa fa-user"></i>
                      </span>
                      <span>Log In</span>
                    </a>
                  </router-link>
                </li>
                <li>
                  <a v-on:click="logout" v-if="userOnline">
                    <span class="icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <span>Log Out ({{user ? user.username : ''}})</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</section>
</template>
<script>
import eventBus from './eventbus.js'
export default {
  created() {
    eventBus.$on('show-online', (showOnline) => {
      this.userOnline = showOnline
    })
    fetch('/api/account').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
      .then(result => {
        this.user = result
        this.userOnline = true
      })
  },
  data() {
    return {
      user: null,
      username: null,
      userOnline: false,
    }
  },
  methods: {
    logout() {
      fetch('/api/logout/', {
          // body: JSON.stringify(info),
          // headers: {
          //   'Content-Type': 'application/json'
          // },
          method: 'DELETE'
        })
        .then((response) => {
          this.$router.push({
            path: '/'
          })
          this.userOnline = false
        })
    }
  }
}
</script>
<style scoped>

</style>
