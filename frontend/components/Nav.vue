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
              </ul>
              <router-link to="/login">
                <!-- <router-link to="/account" v-if="userOnline"> -->
                <a>
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>Log In</span>
                  <span v-if="userOnline">{{ username }}</span>
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</section>
</template>
<script>
export default {
  // created() {
  //   if () {
  //     this.userOnline = true
  //     this.username = 'Test'
  //   }
  // },
  data() {
    return {
      username: null,
      userOnline: false
    }
  }
}
</script>
<style scoped>

</style>
