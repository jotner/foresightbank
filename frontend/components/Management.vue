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

  <section class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <b-field label="Name">
         <b-input v-model="nameInput" placeholder="Enter the name of your new account"></b-input>
         <a v-on:click="newBankAccountName" class="button">Create account</a>
       </b-field>
      </div>
    </div>
  </section>

  <h2 class="title is-5 has-text-centered">Active accounts</h2>
  <div v-for="newAccount in newAccounts" class="list is-hoverable">
  <a class="list-item">
    <span>{{newAccount.name}}</span>
      <a v-on:click="Delete" class="button is-danger">Delete</a>
  </a>
</div>

  </section>
</template>

<script>
  export default {
    created() {
      fetch('/api/account').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
        .then(result => {
          this.user = result
        }),
        fetch('/api/registeraccount/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
          .then(result => {
            this.newAccounts = result
            console.log(this.newAccounts)
          })
    },

    data() {
      return{
        user: null,
        nameInput: null,
        newAccounts: null,
      }
    },
    methods: {
      newBankAccountName(){
        let bankAccountName = {name:this.nameInput}
        fetch('/api/management/', {
          body: JSON.stringify(bankAccountName),
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
