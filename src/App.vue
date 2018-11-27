<template>
  <div id="app">
    <nav-bar/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppCars from './components/AppCars.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    AppCars
    
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
