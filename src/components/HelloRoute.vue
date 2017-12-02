<template lang='pug'>

  .hello-route
    h1 Hi {{userName}}, {{msg}}

</template>

<script>
export default {
  computed: {
    userName: function () {
      return this.$store.state.userName
    }
  },
  name: 'HelloRoute',
  data () {
    return {
      msg: 'This is my awesome route!!'
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
