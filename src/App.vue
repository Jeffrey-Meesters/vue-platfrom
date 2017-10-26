<template>
  <div id="app">
    <nav>
        <ul class="index-nav">
            <li class="index-list-item">
                <i class="fa fa-superpowers" aria-hidden="true"></i>
            </li>
            <li class="index-list-item is-active"><router-link to="/" class="index-link">Home</router-link></li>
            <li class="index-list-item"><router-link to="/testroute" class="index-link">Testroute</router-link></li>
            <li class="index-list-item"><a class="index-link" href="#3">3</a></li>
            <li class="index-list-item"><a class="index-link" href="#4">4</a></li>
        </ul>
    </nav>

    <!-- Router tag: show the components -->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.index-nav {
  background-color: #374c6e;
  color: #fff;
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  margin: 0;
  height: 50px;
  padding: 0 2rem;
}

.index-list-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  transition: 0.5s;
}

.index-list-item:hover {
  background-color: #a65353;
  transition: 1s;
}

.is-active {
  background-color: #a65353;
}
.is-active:hover {
  background-color: lighten(#a65353, 10%);
}

.fa-superpowers {
  color: #a65353;
  font-size: 2rem;
}

.index-link {
  color: #fff;
  text-decoration: none;
}
</style>
