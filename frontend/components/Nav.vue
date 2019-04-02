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
    eventBus.$on('show-online', (payload) => {
      this.userOnline = payload.online
      this.user = {
        username: payload.user
      }
    })
    fetch('/api/account').then(response => response.json())
      .then(result => {
        this.user = typeof result === 'object' ? result : null
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
          method: 'DELETE'
        })
        .then((response) => {
          // Redirect to index when logged out
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
.navbar {
  box-shadow: 0 0.5px 4px 0px gray;
}
</style>
