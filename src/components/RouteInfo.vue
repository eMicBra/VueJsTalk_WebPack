<template>
<div>
    <h2>The current route is:</h2>
    <div>
      <h3>name: {{$route.name}}</h3> 
      <h3>path: {{$route.path}}</h3>
    </div>
</div>
  
</template>
<script>
export default {
  name: 'route-info',

}
</script>
