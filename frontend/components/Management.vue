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
        <a class="button">
          Create new account
        </a>
        <b-field label="Name">
         <b-input v-model="name"></b-input>
     </b-field>
      </div>
    </div>
  </section>
  </section>
</template>

<script>
export default {
  created() {
    fetch('/api/account').then(response => response.json()) // Fetching accountInfo from/account and stores the json object in this.user key
      .then(result => {
        this.user = result
      })
  },
}
</script>

<style scoped>
</style>
