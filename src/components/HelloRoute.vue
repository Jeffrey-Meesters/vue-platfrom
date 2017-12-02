<template lang='pug'>

  .hello-route
    h1 {{msg}}

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

<style lang='sass' scoped>
h1,
h2
  font-weight: bold
  color: blue
  text-shadow: 1px 1px 1px black
</style>
