<template lang="pug">
  h1 Ow, ow, something whent wrong.
    div maybe you typed an incorrect url?
    .button(@click="takeMeBack") take me back!!!
</template>

<script>
export default {
  methods: {
    takeMeBack () {
      window.history.back()
    }
  }
}
</script>

