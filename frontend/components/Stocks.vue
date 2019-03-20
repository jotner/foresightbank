<template>
 <section>
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
export default {
}
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
