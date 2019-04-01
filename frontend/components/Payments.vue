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
  <div class="columns is-centered settings-bg">

    <div class="column is-4">
      <form>
        <div class="field">
          <p class="subtitle">Select Account</p>

          <b-dropdown v-model="isPrivate" hoverable aria-role="list">
            <button class="button" type="button" slot="trigger">
              <template v-if="isPrivate">

                <p><b>Private Account</b>
                </p>
              </template>
              <template v-else>
                <p><b>Stock Account</b></p>
              </template>
              <i class="fa fa-caret-down caret"></i>
            </button>

            <b-dropdown-item :value="true" aria-role="listitem">
              <div class="media">
                <div class="media-content">
                  <p><b>Private:</b> ${{ user ? user.userBalance : '' }}
                  </p>
                </div>
              </div>
            </b-dropdown-item>

            <b-dropdown-item :value="false" aria-role="listitem">
              <div class="media">
                <div class="media-content">
                  <p><b>Stock:</b> ${{ user ? user.stockBalance : '' }}</p>
                </div>
              </div>
            </b-dropdown-item>
          </b-dropdown>
          <p class="subtitle">To User</p>
          <div class="control has-icons-left">
            <input v-model="toUsername" v-if="!missingUsername" class="input is-medium" type="username" placeholder="Username">
            <input v-model="toUsername" v-if="missingUsername" class="input is-medium is-danger" type="username" placeholder="Username">
            <p v-if="missingUsername" class="help is-danger">Field cannot be empty!</p>
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </div>

        </div>

        <div class="field">
          <p class="subtitle">Amount</p>
          <div class="control has-icons-left">
            <input v-model="amount" v-if="!missingAmount" class="input is-medium" type="number" placeholder="Amount">
            <input v-model="amount" v-if="missingAmount" class="input is-danger is-medium" type="number" placeholder="Amount">
            <p v-if="missingAmount" class="help is-danger">Field cannot be empty or contain letters!</p>
            <span class="icon is-small is-left">
              <i class="fa fa-dollar"></i>
            </span>
          </div>
        </div>
        <button v-on:click="sendMoney" class="button is-block loginblock">Send</button>
        <hr>
      </form>
      <b-notification v-if="success" type="is-success" class="notification" has-icon>
        <h1>Transaction complete!</h1>
      </b-notification>

      <br>
    </div>

  </div>
</div>
</template>

<style scoped>
form {
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
}

.button {
  color: white;
}

.caret {
  margin-left: 4px;
}

.settings-container {
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

.notification {
  margin-top: 20px;
}

.notification h1 {
  font-size: 22px;
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
export default {
  created() {
    fetch('/api/account').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
      .then(result => {
        this.user = result
        this.stockBalance = this.user.stockBalance
        this.privateBalance = this.user.userBalance
        this.userId = this.user.userId
      })
  },
  data() {
    return {
      isPrivate: true,
      userId: null,
      user: null,
      toUsername: null,
      amount: null,
      missingUsername: false,
      missingAmount: false,
      privateBalance: null,
      stockBalance: null,
      success: false
    }
  },
  methods: {
    sendMoney() {
      this.success = false
      this.missingAmount = false
      this.missingUsername = false
      if (!this.amount && !this.toUsername) {
        this.missingUsername = true
        this.missingAmount = true
      } else if (!this.toUsername) {
        this.missingUsername = true
        this.missingAmount = false
      } else if (!this.amount) {
        this.missingAmount = true
        this.missingUsername = false
      } else {
        this.missingUsername = false
        this.missingAmount = false
      }
      // Continue to register if all inputs are not empty
      if (this.toUsername && this.amount) {
        if (this.isPrivate) {
          if (this.privateBalance >= this.amount && this.amount >= 0) {
            let info = {
              balance: this.amount,
              userId: this.userId,
              username: this.toUsername
            }
            fetch('/api/updatebalance/' + this.privateBalance, {
                body: JSON.stringify(info),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'PUT'
              })
              .then(() => {
                this.success = true
              })
          } else {
            alert('kuk')
          }
        } else if (!this.isPrivate) {
          if (this.stockBalance >= this.amount && this.amount >= 0) {
            alert('you have more than enough')
          } else {
            alert('kuk')
          }
        }
      }
    }
  }
}
</script>
