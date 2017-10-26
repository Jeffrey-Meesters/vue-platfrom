<template>
  <div class="stars">
      <div class="star">
        <div class="box-one"></div>
        <div class="box-two"></div>
        <div class="box-three"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stars',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.star {
    position: absolute;
    animation: rotate 5s infinite linear;
    height: 50px;
    width: 50px;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.box-one {
    width: 100%;
    height: 100%;
    background-color: red;
    position: relative;
}

.box-two {
    width: 100%;
    height: 100%;
    transform: rotate(120deg);
    background-color: red;
    position: relative;
    top: -50px;
}

.box-three {
    width: 100%;
    height: 100%;
    transform: rotate(240deg);
    background-color: red;
    position: relative;
    top: -100px;
}

.star:hover {
    transform: scale(2)
}
</style>
