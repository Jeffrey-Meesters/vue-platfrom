<template>
  <div class="hello-route">
      <h1>{{msg}}</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  color: red;
  text-shadow: 1px 1px 1px black;
}
</style>
