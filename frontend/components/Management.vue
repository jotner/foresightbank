<template>
  <section>
    <div class="section product-header">
      <div class="container">
        <div class="columns">
          <div class="column">
            <span class="title is-3">Account</span>
            <span class="title is-3 has-text-muted">|</span>
            <span class="title is-4 has-text-muted username">Management</span>
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
    <section class="hero is-white" v-if="accounts && accounts.length === 2">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-4">
            Transfers
          </h2>
          <div class="columns has-text-centered">
            <div class="column is-4">
              <p class="content">
                <b>From :</b>
                <strong v-if="radioFrom">{{ radioFrom.name }}</strong>
              </p>
              <div class="block">
                <b-radio
                  v-for="account in accounts"
                  :key="account.id"
                  v-model="radioFrom"
                  name="z"
                  :native-value="account"
                >
                  {{ account.name }}
                </b-radio>
              </div>
              <b-input
                v-model="amount"
                style="width:400px;"
                placeholder="Amount"
              />
              <b-notification v-if="message && message.error" type="is-warning" class="notification" has-icon>
                <h1>{{ message.error }}</h1>
              </b-notification>
              <b-notification v-if="message && message.success" type="is-success" class="notification" has-icon>
                <h1>{{ message.success }}</h1>
              </b-notification>
            </div>
            <div class="column is-5">
              <p class="content">
                <b>To :</b>
                <strong v-if="radioTo">{{ radioTo.name }}</strong>
              </p>
              <div
                class="block"
              >
                <b-radio
                  v-for="account in accounts"
                  :key="account.id"
                  v-model="radioTo"
                  name="w"
                  :native-value="account"
                >
                  {{ account.name }}
                </b-radio>
              </div>
            </div>
            <div class="column">
              <a
                style="margin-top:25px;"
                class="button"
                @click="transaction(radioFrom.name,radioTo.name,amount,radioFrom.id)"
              >
                <i
                  style="font-size:20px;"
                  class="fa fa-arrow-right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      id="securehero"
      class="hero is-small"
    >
      <div class="hero-body secbg">
        <div class="container has-text-centered">
          <h2 class="title-index">
            Customize your account to suit your needs
          </h2>
        </div>
      </div>
    </div>
    <section class="hero is-white">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-4">
            Open new account
          </h2>
          <div class="columns">
            <div class="column">
              <b-field>
                <b-input
                  v-model="nameInput"
                  style="width:500px;"
                  placeholder="Name of account"
                />
                <a
                  class="button"
                  @click="newBankAccountName"
                >
                  Create account
                </a>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-white">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-4">
            Active accounts
          </h2>
          <div
            v-for="account in accounts"
            :key="account.id"
            class="list is-hoverable"
          >
            <a class="list-item">
              <p class="title is-5"><span class="has-text-weight-light">Account name | </span>{{ account.name }}</p>
              <p class="title is-5"><span class="has-text-weight-light">Account balance | </span>${{ account.balance }}</p>
              <a
                v-if="account.name !== 'Private Account'"
                class="button is-danger"
                @click="deleteBankAccount(account.id)"
              >Delete</a>
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    data() {
      return{
        user: null,
        nameInput: null,
        accounts: null,
        deletedAccount: null,
        radioFrom:null,
        radioTo:null,
        amount:null,
        message:null,
      }
    },
    created() {
      fetch('/api/account/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
        .then(result => {
          this.user = result
        }),
      fetch('/api/registeraccount/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
        .then(result => {
          this.accounts = result
        })
    },
    methods: {
      getUserInfo() {
        fetch('/api/account/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
          .then(result => {
            this.user = result
          }),
        fetch('/api/registeraccount/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
          .then(result => {
            this.accounts = result
          })
      },
      deleteBankAccount(deleted) {
        let deletedId = {id:deleted}
        fetch('/api/deletedbankaccount/', {
          body: JSON.stringify(deletedId),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'DELETE'
        }).then(()=>{
          location.reload()
        })
      },
      newBankAccountName(){
        let bankAccountName = {name:this.nameInput}
        fetch('/api/management/', {
          body: JSON.stringify(bankAccountName),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(()=>{
          location.reload()
        })
      },
      transaction(from,to,amount,id) {
        let transactionInfo = {
          amount: Number(amount),
          from:from,
          to:to,
          idFrom: id
        }
        fetch('/api/transactions/', {
          body: JSON.stringify(transactionInfo),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(response => response.json())
          .then(result => {
            this.message = result
            console.log(this.message);
            this.getUserInfo()
          })
      }
    }
  }
</script>

<style scoped>

</style>
