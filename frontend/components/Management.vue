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

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-4">Transfer</h2>
          <b-dropdown v-model="isPublic" aria-role="list">
            <button class="button is-primary" type="button" slot="trigger">
              <template v-if="isPublic">
                <b-icon icon="earth"></b-icon>
                <span>From</span>
                  </template>
                  <template v-else>
                    <b-icon icon="account-multiple"></b-icon>
                    <span>Friends</span>
                  </template>
                  <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item :value="true" aria-role="listitem">
                  <div class="media">
                    <b-icon class="media-left" icon="earth"></b-icon>
                    <div class="media-content">
                      <h3>1</h3>
                </div>
                    </div>
          </b-dropdown-item>

          <b-dropdown-item :value="false" aria-role="listitem">
              <div class="media">
                  <b-icon class="media-left" icon="account-multiple"></b-icon>
                  <div class="media-content">
                      <h3>2</h3>
                  </div>
              </div>
          </b-dropdown-item>
      </b-dropdown>

      <b-dropdown v-model="isPublic" aria-role="list">
        <button class="button is-primary" type="button" slot="trigger">
          <template v-if="isPublic">
            <b-icon icon="earth"></b-icon>
            <span>To</span>
              </template>
              <template v-else>
                <b-icon icon="account-multiple"></b-icon>
                <span>Friends</span>
              </template>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item :value="true" aria-role="listitem">
              <div class="media">
                <b-icon class="media-left" icon="earth"></b-icon>
                <div class="media-content">
                  <h3>1</h3>
            </div>
                </div>
      </b-dropdown-item>

      <b-dropdown-item :value="false" aria-role="listitem">
          <div class="media">
              <b-icon class="media-left" icon="account-multiple"></b-icon>
              <div class="media-content">
                  <h3>2</h3>
              </div>
          </div>
      </b-dropdown-item>
  </b-dropdown>
<a v-on:click="newBankAccountName" class="button">Transfer</a>
    </div>
    </div>
    </section>


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
  <div
    v-for="newAccount in newAccounts"
    :key="newAccount.id"
    class="list is-hoverable">
  <a class="list-item">
    <span>{{newAccount.name}}</span>
      <a v-on:click="deleteBankAccount(newAccount.id)" class="button is-danger">Delete</a>
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
        deletedAccount: null,
        isPublic: true,
      }
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
      }
    }
  }
</script>

<style scoped>
</style>
