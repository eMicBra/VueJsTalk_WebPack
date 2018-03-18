<style scoped>
    ul {
        list-style: none;
    }
</style>

<template>
    <div>
        <ul>
            <li v-for="route in routes" :key="route.name"><router-link :to="{name: route.name}">{{route.display}}</router-link></li>
        </ul>
    </div>
</template>
<script>
import { routes } from '@/router/index'
export default {
    name: 'app-nav',
    data(){
        return {
            routes: routes
        };
    }
}
</script>

