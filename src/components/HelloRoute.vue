<template>
  <div class="hello-route">
      <h1>{{msg}}</h1>
      <router-link to="/">Go to Homepage</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloRoute',
  data () {
    return {
      msg: 'This is my own route!!'
    }
  }
}
</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  color: red;
  text-shadow: 1px 1px 1px black;
}
</style>
