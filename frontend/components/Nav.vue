<template>
  <section class="hero is-medium is-bold">
    <div class="hero-head head-menu">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <h1>FORESIGHT BANK</h1>
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

                <span class="navbar-item">
                  <router-link class="button is-black is-outlined" to="/login">
                    <a>
                      <span class="icon">
                        <i class="fa fa-user"></i>
                      </span>
                      <span>Log In</span>
                    </a>
                  </router-link>
                </span>
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

  }
</script>
<style scoped>

</style>