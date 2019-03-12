<template>
  <div>
    <navbar />
    <router-view />
    <foot />
  </div>
</template>
<script>
  import Nav from './Nav.vue'
  import Footer from './Footer.vue'

  export default {
    components: {
      'foot': Footer,
      'navbar': Nav,
    }
  }
</script>