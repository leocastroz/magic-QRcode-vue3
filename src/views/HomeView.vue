<template>
  <main>
    <div class="container">
      <h1>🎉 BEM-VINDO</h1>
      <br>
      <p>clique no botão "começar agora" e desvende</p>
      <p>suas senhas e mensagens de Qrcodes</p>
      <div class="cont-leo">
        <img class="leo" src="../assets/leo.jpg" alt="">
      </div>
      <img class="left" src="../assets/handle.png" alt="">
    </div>
  </main>
</template>

<style>

main {
  margin: 0 auto;
  max-width: 1200px;
}

.container{
  margin: 150px 0;
}

.cont-leo {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin-top: 50px;
  background-image: linear-gradient(45deg, #f3ec78, #ff7f29);
  
}

.leo {
  padding: 3px;
  border-radius: 100%;
  width: 160px;
}

.left {
  width: 400px;
  bottom: 0;
  right: 0;
  position: absolute;
}
</style>

