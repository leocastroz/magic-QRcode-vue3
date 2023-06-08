<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
      <nav>
        <RouterLink to="/">👋 Home</RouterLink>
        <div class="pulse">
          <RouterLink class="pulse-button" to="/about">⭐ começar agora</RouterLink>
        </div>
      </nav>
    </div>
    <RouterView />
  </header>
 
</template>

<style scoped>

header{
  background-image: url('https://www.rocketseat.com.br/discover/devlinks/bg-desktop.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  text-align: center;
  color: #ffffff86;
}

.wrapper{
  margin: 0 auto;
  max-width: 1200px;
}

nav {
  margin-top: 50px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
}

nav a {
  color: #ffffff;
  padding: 12px 20px;
  text-decoration: none;
  font-size: 20px;
}

nav .pulse-button {
  background: #00000073;
  border-radius: 3px;
  font-size: 14px;
  border: 1px solid #ffffff;
}

.pulse {
  width: 180px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 800px) {
  nav a {
    font-size: 13px;
  }
  nav .pulse-button {
    font-size: 11px;
  }
}

</style>
