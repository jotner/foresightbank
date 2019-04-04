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
        <p>Send money from your account to any registered user you would like.<br>The money will be sent to the chosen users' main account instantly.</p>
        <div class="field">
          <p class="subtitle">Select Account</p>
          <b-field v-if="!accountError">
            <b-select v-model="selectedAccount" placeholder="My Accounts" expanded>
              <option v-for="account in accounts" :key="account.id" :value="account">
                {{ account.name }}: ${{account.balance}}
              </option>
            </b-select>
          </b-field>

          <b-field type="is-danger" v-if="accountError">
            <b-select v-model="selectedAccount" type="is-danger" placeholder="My Accounts" expanded>
              <option v-for="account in accounts" :key="account.id" :value="account">
                {{ account.name }}: ${{account.balance}}
              </option>
            </b-select>
          </b-field>
          <p class="subtitle">To</p>
          <div class="control has-icons-left">
            <input v-model="recievingUser" v-if="!missingUsername" class="input is-medium" type="username" placeholder="Username">
            <input v-model="recievingUser" v-if="missingUsername" class="input is-medium is-danger" type="username" placeholder="Username">
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
        <button v-on:click="sendMoney" class="button is-medium is-block loginblock">Pay</button>
        <hr>
      </form>
      <b-notification v-if="!userExists" type="is-warning" class="notification" has-icon>
        <h1>User does not exist!</h1>
      </b-notification>
      <b-notification v-if="success" type="is-success" class="notification" has-icon>
        <h1>Transaction complete!</h1>
      </b-notification>
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

.field {
  text-align: center;
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
    fetch('/api/account').then(response => response.json()).
    then(result => {
        this.user = result
        this.userId = this.user.userId
      }),
      fetch('/api/registeraccount/').then(response => response.json())
      .then(result => {
        this.accounts = result
      })
  },
  data() {
    return {
      accounts: null,
      selectedAccount: null,
      userId: null,
      user: null,
      recievingUser: null,
      amount: null,
      userExists: true,
      accountError: false,
      success: false,
      missingUsername: false,
      missingAmount: false,
    }
  },
  methods: {
    sendMoney() {
      this.userExists = true
      this.accountError = false
      this.missingAmount = false
      this.missingUsername = false
      if (!this.amount && !this.recievingUser && !this.selectedAccount) {
        this.missingUsername = true
        this.missingAmount = true
        this.accountError = true
      } if (!this.recievingUser) {
        this.missingUsername = true
      } if (!this.amount) {
        this.missingAmount = true
      } if (!this.selectedAccount) {
        this.accountError = true
      }
      // Continue to register if all inputs are not empty
      if (this.recievingUser && this.amount) {
        if (this.selectedAccount.balance >= this.amount && this.amount >= 1) {
          let info = {
            amountSent: this.amount,
            userId: this.userId,
            recievingUser: this.recievingUser,
            accountName: this.selectedAccount.name
          }
          fetch('/api/payments/' + this.selectedAccount.balance, {
              body: JSON.stringify(info),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            })
            .then(response => {
              if (response.ok) {
                this.success = true
              } else {
                this.userExists = false
              }
            })
        } else {
          this.$toast.open({
            message: 'Insufficient funds!',
            type: 'is-danger',
            duration: 4000,
          })
        }
      }
    }
  }
}
</script>
