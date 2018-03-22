<template>
<div>
    <h2>The current route is:</h2>
    <div>
      <h3>name: {{routeName}}</h3> 
      <h3>path: {{routePath}}</h3>
    </div>
    <slot>
      This is the default slot content.
    </slot>

</div>
  
</template>
<script>
export default {
  name: 'route-info',
  props:{
   routeName:{
     required: true,
     type: String,
   }, 
   routePath:{
     required: true,
     type: String,
   } 
  }

}
</script>
