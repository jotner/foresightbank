<template>
  <div class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-dark">Foresight Bank</h3>
            <div class="box">
              <figure class="avatar">
                <img src="media/user.svg">
              </figure>
              <form>
                <div class="field">
                  <div class="control">
                    <input v-model="username" class="input is-large" type="username" placeholder="Username">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input v-model="password" class="input is-large" type="password" placeholder="Password">
                  </div>
                </div>
                <button v-on:click="login" class="button is-block loginblock is-large is-fullwidth">Login</button><br>
                  <router-link to="/register"><button class="button is-block loginblock is-medium ">Sign Up</button></router-link>
              </form>
            </div>
            <p class="has-text loginoptions">
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      login() {
        //najs
      }
    }
  }
</script>
