<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about" class="use">Usar</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header{
  text-align: center;
}

.wrapper{
  margin: 0 auto;
  max-width: 1200px;
}

nav{
  padding: 20px;
}

nav a{
  padding: 10px;
  text-decoration: none;
  color: #000000;
  font-size: 20px;
}

nav .use{
  padding: 5px 20px;
  background-color: #b668ff;
  border-radius: 3px;
}
</style>
