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
<<<<<<< HEAD
          <h2 class="title is-4">Transfer</h2>
          <b-dropdown v-model="isPublic" aria-role="list">
            <button class="button is-primary" type="button" slot="trigger">
              <template v-if="isPublic">
                <b-icon icon="earth"></b-icon>
                <span>From</span>
                  </template>
                  <template v-else>
                    <b-icon icon="account-multiple"></b-icon>
                    <span>{{from}}</span>
                  </template>
                  <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item v-for="newAccount in newAccounts" :value="true" aria-role="listitem">
                  <div class="media" >
                    <b-icon class="media-left" icon="earth"></b-icon>
                    <div class="media-content">
                      <h3>{{newAccount.name}}</h3>
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
                <span>{{newAccounts.name}}</span>
              </template>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item v-for="newAccount in newAccounts" v-model="to=newAccount.name" :value="true" aria-role="listitem">
              <div class="media">
                <b-icon class="media-left" icon="earth"></b-icon>
                <div class="media-content">
                  <h3>{{newAccount.name}}</h3>
              </div>
                </div>
            </b-dropdown-item>


  </b-dropdown>
<a v-on:click="newBankAccountName" class="button">Transfer</a>
    </div>
=======
          <h2 class="title is-4">Transfers</h2>
          <div class="columns has-text-centered">

          <div class="column is-4">
            <p class="content">
              <b>From :</b>
               <strong>{{ radioFrom }}</strong>
            </p>

            <div class="block">
              <b-radio v-model="radioFrom"
              native-value="default">
              default
            </b-radio>
          </div>
        </div>

        <div class="column is-5">
          <p class="content">
            <b>To :</b>
             <strong>{{ radioTo }}</strong>
          </p>

          <div class="block">
            <b-radio v-model="radioTo"
            native-value="default">
            default
          </b-radio>
        </div>
      </div>
      <div class="column">
        <a style="margin-top:25px;" v-on:click="" class="button"><i style="font-size:20px;" class="fa fa-arrow-right"></i></a>
      </div>

        </div>
      </div>
>>>>>>> 8468f3e90d36c8e800d1e99d38885da45cbc3483
    </div>
  </section>

  <div id="securehero" class="hero is-small">
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
        <h2 class="title is-4">Create new account</h2>
        <div class="columns">
          <div class="column">
        <b-field>
         <b-input style="width:500px;" v-model="nameInput" placeholder="Name of account"></b-input>
         <a v-on:click="newBankAccountName" class="button">Create account</a>
       </b-field>
     </div>
     </div>
      </div>
    </div>
</section>

  <section class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <h2 class="title is-4">Active accounts</h2>
        <div
        v-for="newAccount in newAccounts"
        :key="newAccount.id"
        class="list is-hoverable">
        <a class="list-item">
          <p class="title is-5"><span class="has-text-weight-light">Account name | </span>{{newAccount.name}}</p>
          <p class="title is-5"><span class="has-text-weight-light">Account balance | </span>{{newAccount.balance}}$</p>
          <a v-on:click="deleteBankAccount(newAccount.id)" style="" class="button is-danger">Delete</a>
        </a>
      </div>
    </div>
  </div>
</section>
  </section>
</template>

<script>
  export default {
    created() {
      fetch('/api/account/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
        .then(result => {
          this.user = result
        }),
      fetch('/api/registeraccount/').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
        .then(result => {
          this.newAccounts = result
        })
    },

    data() {
      return{
        user: null,
        nameInput: null,
        newAccounts: null,
        deletedAccount: null,
<<<<<<< HEAD
        isPublic: true,
        from: null,
        to: null,
=======
        radioFrom:null,
        radioTo:null,
>>>>>>> 8468f3e90d36c8e800d1e99d38885da45cbc3483
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
