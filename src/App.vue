<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <app-nav/>
    <route-info :routeName="routeName" :routePath="routePath">
      Route Name: {{routeName}}, Route Path: {{routePath}}
    </route-info>
    <img src="./assets/logo.png">

    <!--component defined in route displays here-->
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
  computed: {
    routeName() {
      return this.$route.name;
    },
    routePath(){
      return this.$route.path;
    }
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
