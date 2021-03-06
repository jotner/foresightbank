<template>
<div>
  <div class="section product-header">
    <div class="container">
      <div class="columns">
        <div class="column">
          <span class="title is-3">Account</span>
          <span class="title is-3 has-text-muted">|</span>
          <span class="title is-4 has-text-muted username">Settings</span>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
          <div class="tabs is-right">
            <ul>
              <li>
                <router-link to="/account">My Account</router-link>
              </li>
              <li>
                <router-link to="/account/stocks">Stocks and Bonds</router-link>
              </li>
              <li>
                <router-link to="/account/management">Management</router-link>
              </li>
              <li>
                <router-link to="/account/payments">Payments</router-link>
              </li>
              <li>
                <router-link to="/account/settings">Settings</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="columns settings-bg">
    <div class="container settings-cont">
      <div class="column is-4">
        <form>
          <div class="field">
            <p>If you would like to change your username or password you can do so by filling out either of the fields below.</p>
            <p class="subtitle">Change Username</p>
            <div class="control has-icons-left">
              <input v-model="changeUsername" v-if="!missingUsername" class="input is-medium" type="username" placeholder="New Username">
              <input v-model="changeUsername" v-if="missingUsername" class="input is-medium is-danger" type="username" placeholder="New Username">
              <p v-if="missingUsername" class="help is-danger">New username cannot be empty!</p>
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>
          <button v-on:click="changeName" class="button is-block loginblock">Update username</button>
          <b-notification v-if="usernameSuccess" type="notification is-success" class="notification" has-icon>
            <h1>Username updated!</h1>
          </b-notification>
          <b-notification v-if="userExists" type="notification is-danger" class="notification" has-icon>
            <h1>Username is already taken!</h1>
          </b-notification>
          <hr>
          <div class="field">
            <p class="subtitle">Change Password</p>
            <div class="control has-icons-left">
              <input v-model="changePassword" v-if="!missingPassword" class="input is-medium" type="password" placeholder="New Password">
              <input v-model="changePassword" v-if="missingPassword" class="input is-danger is-medium" type="password" placeholder="New Password">
              <p v-if="missingPassword" class="help is-danger">New password cannot be empty!</p>
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <button v-on:click="changePass" class="button is-block loginblock">Update password</button>
          <b-notification v-if="passwordSuccess" type="notification is-success" class="notification" has-icon>
            <h1>Password updated!</h1>
          </b-notification>
          <hr>
          <p>If you no longer need your Foresight Bank account you can permanently delete it.</p>
          <p>Please make sure that all your funds and stocks have been transferred before deleting.</p>
          <p>Deleting your account will delete everything, including all data permanently. This cannot be undone.</p><br>
          <button v-on:click="deleteAcc" class="button is-block delete-button">Delete account</button>
        </form>
        <br>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.button {
  color: white;
}

.notification {
  margin-top: 20px;
}

.settings-cont {
  margin-top: 20px;
}

.delete-button {
  background-color: #fff;
  color: red;
  border: 1px solid red;
}

.delete-button:hover {
  background-color: red;
  color: white;
  border: 1px solid red;
}

.tabs ul {
  border-bottom-width: 0px;
}

#panel-top {
  margin-top: 0px;
  border-top: 0px;
}

.panel-heading {
  background-color: #FFF;
  border-radius: 0px;
  border-top: 0px;
  border-bottom: 0px;
}

.subtitle {
  margin-top: 20px;
  margin-bottom: 4px;
  font-weight: bold;
}

.settings-bg {
  background-color: #fff;
  margin-bottom: 40px;
}
</style>

<script>
import eventBus from './eventbus.js'
export default {
  created() {
    fetch('/api/account').then(response => response.json())
      .then(result => {
        this.username = result.username
      })
  },
  data() {
    return {
      changeUsername: null,
      changePassword: null,
      missingUsername: false,
      missingPassword: false,
      usernameSuccess: false,
      passwordSuccess: false,
      userExists: false,
      showOnline: true
    }
  },
  methods: {
    deleteAcc() {
      let confirmed = confirm("Are you sure you want to delete your account?");
      if (confirmed === true) {
        let deleteUsername = this.username
        fetch('/api/logout/', {
          method: 'DELETE'
        })
        fetch('/api/delete/' + deleteUsername, {
            method: 'DELETE'
          })
          .then(response => {
            this.$router.push({
              path: '/'
            })
            this.showOnline = false
            eventBus.$emit('show-online', {
              online: this.showOnline,
            })
          })
      }
    },
    changeName() {
      this.userExists = false
      this.usernameSuccess = false
      this.passwordSuccess = false
      this.missingPassword = false
      if (!this.changeUsername) {
        this.missingUsername = true
      } else if (this.changeUsername) {
        this.missingUsername = false
        this.missingPassword = false
        let username = this.username
        let newName = {
          username: this.changeUsername
        }
        fetch('/api/updatename/' + username, {
            body: JSON.stringify(newName),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          })
          .then((response) => {
            if (response.ok) {
              this.usernameSuccess = true
              eventBus.$emit('show-online', {
                online: this.showOnline,
                user: this.changeUsername
              })
            } else {
              this.userExists = true
            }
          })
      }
    },
    changePass() {
      this.usernameSuccess = false
      this.passwordSuccess = false
      this.missingUsername = false
      if (!this.changePassword) {
        this.missingPassword = true
      } else if (this.changePassword) {
        this.missingUsername = false
        this.missingPassword = false
        let username = this.username
        let newPass = {
          password: this.changePassword
        }
        fetch('/api/updatepass/' + username, {
            body: JSON.stringify(newPass),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          })
          .then(() => {
            this.passwordSuccess = true
          })
      }
    }
  }
}
</script>
