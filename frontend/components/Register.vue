<template>
<div class="login">
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div v-if="showWelcome" class="welcomeMsg">
          <h3>Welcome to Foresight Bank, <span class="user">{{ username }}</span>!</h3>
          <p>You can now
            <a>
              <router-link to="/login"><u>log in</u></router-link>
            </a> to access your newly created account.</p>
        </div>
        <div class="column is-4 is-offset-4">
          <div v-if="hideForm" class="box">
            <h3 class="title has-text-dark">Sign Up</h3>
            <p>Fill in the form below to sign up for an account at Foresight Bank.</p><br>
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left">
                <input v-model="username" v-if="!missingUsername" class="input is-large" type="text" placeholder="Username">
                <input v-model="username" v-if="missingUsername" class="input is-large is-danger" type="text" placeholder="Username">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <p v-if="missingUsername" class="help is-danger">You must choose a username!</p>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input v-model="password" v-if="!missingPassword" class="input is-large" type="password" placeholder="Password">
                <input v-model="password" v-if="missingPassword" class="input is-large is-danger" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <p v-if="missingPassword" class="help is-danger">You must choose a password!</p>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input v-model="checked" type="checkbox">
                  I agree to the <a href="#">terms and conditions</a>
                  <p v-if="missingCheckbox" class="help is-danger">You must agree to the terms and conditions!</p>
                </label>
              </div>
            </div>
            <p v-if="userExists" class="help is-danger user-exist">The username is already in use!</p>
            <div class="field is-grouped">
              <div class="control">
                <input v-on:click="register" class="button" value="Submit" type="button">
              </div>
              <div class="control">
                <router-link to="/login"><button class="button is-text">Go back</button></router-link>
              </div>
            </div>
          </div>
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

.welcomeMsg {
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
}

.welcomeMsg h3 {
  color: #4a4a4a;
  font-size: 36px;
}

.welcomeMsg p {
  color: #4a4a4a;
  font-size: 20px;
}

.welcomeMsg a {
  color: #313672;
}

.welcomeMsg a:hover {
  text-decoration: underline;
}

.missing {
  color: red;
}

.user-exist {
  font-size: 20px;
}

.button.is-text {
  color: #4a4a4a;
  text-decoration: none;
}

.button.is-text:hover {
  background-color: white;
  text-decoration: underline;
}

.user {
  font-weight: bold;
}

.checkbox a {
  text-decoration: underline;
}
</style>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      showWelcome: false,
      hideForm: true,
      checked: false,
      missingUsername: false,
      missingPassword: false,
      missingCheckbox: false,
      userExists: false
    }
  },
  methods: {
    register() {
      // Check if username, password and terms are empty
      this.missingCheckbox = false
      this.userExists = false
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
      if (!this.checked) {
        this.missingCheckbox = true
      }
      // Continue to register if all inputs are not empty
      if (this.username && this.password && this.checked) {
        let info = {
          username: this.username,
          password: this.password
        }
        fetch('/api/register/', {
            body: JSON.stringify(info),
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          .then(response => {
            if (response.status === 200) {
              this.showWelcome = true
              this.hideForm = false
            } else {
              this.userExists = true
            }
          })
      }
    }
  }
}
</script>
