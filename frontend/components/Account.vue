<template>
  <div>
    <div class="section product-header">
      <div class="container">
        <div class="columns">
          <div class="column">
            <span class="title is-3">Account</span>
            <span class="title is-3 has-text-muted">|</span>
            <span class="title is-4 has-text-muted">Johan</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="panel">
          <p class="panel-heading is-size-4">
            <span>Privatkonto</span> - 4569kr
            <span v-if="id !== users.id" v-on:click="transformclick(users.id)">{{users.userBalance}}</span><input v-if="id === users.id" v-model="users.userBalance" type="text">
            <a class="button">Deposit</a>
          </p>

        </div>
        <div class="panel">
          <p class="panel-heading is-size-4">
            Fondkonto - 68321kr
            <a class="button">Deposit</a>
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
.panel-heading{
  background-color: white;
}

#securehero {
  padding-bottom: 10px;
}

.button {
  float: right;
}
</style>

<script>

</script>
