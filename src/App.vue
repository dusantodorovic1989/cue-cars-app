<template>
  <div id="app">
    <nav-bar/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppCars from './components/AppCars.vue';
import AddCars from './components/AddCars.vue';
export default {
  name: 'app',
  components: {
    NavBar,
    AppCars,
    AddCars
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
