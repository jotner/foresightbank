<template>
  <div class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-dark">Sign Up</h3>
            <div class="box">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Name">
                </div>
              </div>
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                  <input v-model="username" class="input" type="text" placeholder="Username">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input v-model="password" class="input" type="password" placeholder="Password">
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox">
                    I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                    <input v-on:click="register" class="button" value="Submit" type="button">
                </div>
              </div>
            </div>
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
        register() {
          let info = {
            username: this.username,
            password: this.password
          }
          fetch('http://localhost:3000/register/', {
              body: JSON.stringify(info),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            })
            .then(() => {

            })
        }
      }
    }
</script>
