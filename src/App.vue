<template>
  <div id="app">
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
