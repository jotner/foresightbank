<template>
<div>
  <div class="section product-header">
    <div class="container">
      <div class="columns">
        <div class="column">
          <span class="title is-3">Account</span>
          <span class="title is-3 has-text-muted">|</span>
          <span class="title is-4 has-text-muted username">{{ user ? user.username : '' }}</span>
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
  <div class="columns">
    <div class="column">
      <div v-for="account in accounts" :key="account.id" class="panel">
        <p class="panel-heading is-size-4">
          <span v-if="user">{{account.name}} - {{account.balance}}$</span>
          <b-dropdown position="is-bottom-right" aria-role="menu">
            <a class="navbar-item" slot="trigger" role="button">
              <span>Deposit<i class="fa fa-caret-down"></i></span>
              <b-icon icon="menu-down"></b-icon>
            </a>
            <b-dropdown-item aria-role="menu-item" custom paddingless>
              <form action="">
                <div class="modal-card">
                  <section class="modal-card-body">
                    <input v-model="amount" class="input" type="text" placeholder="Deposit amount">
                    <a v-on:click="transaction" class="button">Deposit</a>
                    <hr class="dropdown-divider">
                  </section>
                </div>
              </form>
            </b-dropdown-item>
          </b-dropdown>
        </p>
      </div>
    </div>
  </div>
  <div class="columns is-multiline">
    <div class="column">
      <div class="box">
        <div class="heading">Utgifter</div>
        <div class="title">5434kr</div>
        <div class="level">
          <div class="level-item">
            <div class="">
              <div class="heading">Faktura</div>
              <div class="title is-5">2500kr</div>
            </div>
          </div>
          <div class="level-item">
            <div class="">
              <div class="heading">Räkningar</div>
              <div class="title is-5">1500kr</div>
            </div>
          </div>
          <div class="level-item">
            <div class="">
              <div class="heading">Övrigt</div>
              <div class="title is-5">2500kr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <div class="heading">Inkomster</div>
        <div class="title">16343kr</div>
        <div class="level">
          <div class="level-item">
            <div class="">
              <div class="heading">Arbete</div>
              <div class="title is-5">60%</div>
            </div>
          </div>
          <div class="level-item">
            <div class="">
              <div class="heading">Försäljning</div>
              <div class="title is-5">25%</div>
            </div>
          </div>
          <div class="level-item">
            <div class="">
              <div class="heading">Övrigt</div>
              <div class="title is-5">15%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="securehero" class="hero is-small">
    <div class="hero-body secbg">
      <div class="container has-text-centered">
        <h1 class="title-index">
          Your account is safe with Foresight Secure
        </h1>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.panel-heading {
  background-color: white;
}

#securehero {
  padding-bottom: 10px;
}

.input {
  width: 180px;
  float: right;
}

.modal-card {
  width: 302px;
}

/* Makes the first letter of the username capitalized */
.username {
  text-transform: capitalize;
}

.navbar-item>span {
  font-size: 20px;
}

.navbar {
  margin-bottom: 15px;
}

b-dropdown {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

.dropdown {
  vertical-align: baseline;
}

.tabs a {
  display: inline-block;
}
</style>

<script>
export default {
  created() {
    fetch('/api/account').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
      .then(result => {
        this.user = result
      }),
      fetch('/api/registeraccount/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
      .then(result => {
        this.accounts = result
      })
  },
  data() {
    return {
      user: null,
      amount: null,
      accounts: null,
    }
  },
  methods: {
    transaction() {
      let transactionInfo = {
        amount: Number(this.amount)
      }

      fetch('/api/transactions/', {
        body: JSON.stringify(transactionInfo),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    }
  }
}
</script>
