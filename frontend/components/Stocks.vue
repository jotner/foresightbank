<template>
  <section>
    <div class="section product-header">
      <div class="container">
        <div class="columns">
          <div class="column">
            <span class="title is-3">Account</span>
            <span class="title is-3 has-text-muted">|</span>
            <span class="title is-4 has-text-muted username">Stocks and Bonds</span>
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
    <div class="columns is-centered">
      <div class="column is-narrow">
        <table class="table">
          <thead>
            <tr>
              <th><abbr title="Ranking">Ranking</abbr></th>
              <th>Stock</th>
              <th><abbr title="Price">Price</abbr></th>
              <th><abbr title="Change">Change</abbr></th>
              <th>⇅</th>
              <th><abbr title="Changep">%Change</abbr></th>
              <th>Capital</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="Ranking">Ranking</abbr></th>
              <th>Stock</th>
              <th><abbr title="Price">Price</abbr></th>
              <th><abbr title="Change">Change</abbr></th>
              <th>⇅</th>
              <th><abbr title="Changep">%Change</abbr></th>
              <th>Capital</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>1</th>
              <td>Stock 1</td>
              <td>25754</td>
              <td>65.23</td>
              <td><i class="fa fa-sort-up has-text-success"></i></td>
              <td class="has-text-success">0.25%</td>
              <td>3Billion</td>
              <td><a class="button">Buy</a><a class="button">Sell</a></td>
            </tr>
            <tr>
              <th>2</th>
              <td>Stock 2</td>
              <td>38123</td>
              <td>20.55</td>
              <td><i class="fa fa-sort-up has-text-success"></i></td>
              <td class="has-text-success">0.11%</td>
              <td>7 Million</td>
              <td><a class="button">Buy</a><a class="button">Sell</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.table {
  margin-top: 23px;
  margin-bottom: 23px;
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  width: 1500px;
}

@media screen and (max-width: 1500px) {
  .table {
    margin-left: auto;
    margin-right: auto;
    table-layout: auto;
    width: 950px;
  }
}

@media screen and (max-width: 950px) {
  .table {
    margin-left: auto;
    margin-right: auto;
    table-layout: fixed;
    width: 750px;
  }
}

@media screen and (max-width: 745px) {
  .table {
    margin-left: auto;
    margin-right: auto;
    table-layout: fixed;
    width: 650px;
  }
}

@media screen and (max-width: 650px) {
  .table {
    margin-left: auto;
    margin-right: auto;
    table-layout: auto;
  }
}
</style>
