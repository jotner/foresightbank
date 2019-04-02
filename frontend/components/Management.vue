<template>
  <section>
    <div class="section product-header">
      <div class="container">
        <div class="columns">
          <div class="column">
            <span class="title is-3">Management</span>
            <span class="title is-3 has-text-muted">|</span>
          </div>
        </div>
      </div>
    </div>

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
                  v-bind:native-value="account"
                >
                  {{ account.name }}
                </b-radio>
              </div>
              <b-input
                v-model="amount"
                style="width:400px;"
                placeholder="Amount"
              />
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
                  v-bind:native-value="account"
                >
                  {{ account.name }}
                </b-radio>
              </div>
            </div>
            <div class="column">
              <a
                style="margin-top:25px;"
                class="button"
                v-on:click="transaction(radioFrom.name,radioTo.name,amount,radioFrom.id)"
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
            Create new account
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
                  v-on:click="newBankAccountName"
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
              <p class="title is-5"><span class="has-text-weight-light">Account balance | </span>{{ account.balance }}$</p>
              <a
                class="button is-danger"
                v-on:click="deleteBankAccount(account.id)"
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
      deleteBankAccount(deleted) {
        let deletedId = {id:deleted}
        fetch('/api/deletedbankaccount/', {
          body: JSON.stringify(deletedId),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'DELETE'
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
        })
      },
      transaction(from,to,amount,id) {
        let transactionInfo = {
          amount: Number(amount),
          from:from,
          to:to,
          idFrom: id
        }
        console.log(transactionInfo);
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

<style scoped>

</style>
