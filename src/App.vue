<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <app-nav/>
    <route-info/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import appNav from '@/components/AppNav'
import routeInfo from '@/components/RouteInfo'
export default {
  name: 'App',
  components: {
    appNav,
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
