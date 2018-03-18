<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <img src="./assets/logo.png">
    <route-info/>
    <router-view/>
  </div>
</template>

<script>
import routeInfo from './components/RouteInfo'
export default {
  name: 'App',
  components: {
    routeInfo
  },
  data() {
    return {
      msg: 'Welcome to Vue.js'
    };
  },
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
