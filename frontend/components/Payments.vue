<template>
<div>
  <div class="section product-header">
    <div class="container">
      <div class="columns">
        <div class="column">
          <span class="title is-3">Account</span>
          <span class="title is-3 has-text-muted">|</span>
          <span class="title is-4 has-text-muted username">Payments</span>
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
                <router-link to="/account/payments">Payments</router-link>
              </li>
              <li>
                <router-link to="/account/stocks">Stocks and Bonds</router-link>
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
    <div class="container">
      <div class="column is-4">
        <form>
          <div class="field">

            <p>If you would like to change your username or password you can do so by filling in either of the forms listed below.</p>
            <p class="subtitle">From Account</p>
            <b-dropdown hoverable aria-role="list">
              <button class="button" slot="trigger">
                <span>Bank Account <i class="fa fa-caret-down"></i></span>
                <b-icon icon="menu-down"></b-icon>
              </button>

              <b-dropdown-item aria-role="listitem">Private</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Stock</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
            </b-dropdown>
            <p class="subtitle">To User</p>
            <div class="control has-icons-left">
              <input v-model="changeUsername" v-if="!missingUsername" class="input is-medium" type="username" placeholder="Username">
              <input v-model="changeUsername" v-if="missingUsername" class="input is-medium is-danger" type="username" placeholder="New Username">
              <p v-if="missingUsername" class="help is-danger">New username cannot be empty!</p>
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </div>

          </div>

          <div class="field">
            <p class="subtitle">Amount</p>
            <div class="control has-icons-left">
              <input v-model="changePassword" v-if="!missingPassword" class="input is-medium" type="password" placeholder="Amount">
              <input v-model="changePassword" v-if="missingPassword" class="input is-danger is-medium" type="password" placeholder="New Password">
              <p v-if="missingPassword" class="help is-danger">New password cannot be empty!</p>
              <span class="icon is-small is-left">
                <i class="fa fa-dollar"></i>
              </span>
            </div>
          </div>
          <button class="button is-block loginblock">Send</button>
          <hr>
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

.container {
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
