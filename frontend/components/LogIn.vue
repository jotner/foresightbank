<template>
<div class="login">
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <img src="media/foresightloggasvart2.0.png">
          <div class="box">
            <figure class="avatar">
              <img src="media/user.svg">
            </figure>
            <form>
              <div class="field">
                <div class="control has-icons-left">
                  <input v-model="username" v-if="!missingUsername" class="input is-large" type="username" placeholder="Username">
                  <input v-model="username" v-if="missingUsername" class="input is-large is-danger" type="username" placeholder="Username">
                  <p v-if="missingUsername" class="help is-danger">This field cannot be empty!</p>
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left">
                  <input v-model="password" v-if="!missingPassword" class="input is-large" type="password" placeholder="Password">
                  <input v-model="password" v-if="missingPassword" class="input is-large is-danger" type="password" placeholder="Password">
                  <p v-if="missingPassword" class="help is-danger">This field cannot be empty!</p>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <p v-if="error" class="help is-danger error">Incorrect username or password!</p>
              <button v-on:click="login" class="button is-block loginblock is-large is-fullwidth">Log in</button><br>
              <router-link to="/register"><button class="button is-block loginblock">Sign up</button></router-link>
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

<style scoped>
.button {
  color: white;
}

.error {
  font-size: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      missingUsername: null,
      missingPassword: null,
      error: false
    }
  },
  methods: {
    login() {
      this.error = false
      if (!this.username && !this.password) {
        this.missingUsername = true
        this.missingPassword = true
      } else if (!this.username) {
        this.missingUsername = true
        this.missingPassword = false
      } else if (!this.password) {
        this.missingPassword = true
        this.missingUsername = false
      } else {
        this.missingUsername = false
        this.missingPassword = false
      }
      if (this.username && this.password) {

        let info = {
          username: this.username,
          password: this.password
        }
        fetch('http://localhost:3000/login/', {
            body: JSON.stringify(info),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          .then(response => {
            if (response.ok) {
              this.$router.push({
                path: '/account'
              })
            } else {
              this.error = true
            }
          })
      }
    }
  }
}
</script>
