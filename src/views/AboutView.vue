<template>
  <div class="group">
    <div class="container-cam">
      <a href="/">Página Inicial</a>
      <div class="webcam">
        <qrcode-stream :torch="torch" @init="onInit" @decode="onDecode"></qrcode-stream>
      </div>
      <button @click="torch=!torch">ATIVAR FLASH</button>
      <p>{{error}}</p>
      <p>{{decodedString}}</p>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader'

export default {
  data(){
    return{
      error: '',
      decodedString: '',
      torche: false
    }
  },
  components: {
    QrcodeStream,
  },
  methods: {
    async onInit(promise){
      try {
      const { capabilities } = await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "usuário negou permissão de acesso à câmera"
        } else if (error.name === 'NotFoundError') {
          this.error = "nenhum dispositivo de câmera adequado instalado"
        } else if (error.name === 'NotSupportedError') {
          this.error = "a página não é servida por HTTPS (ou localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "talvez a câmera já esteja em uso"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "você solicitou a câmera frontal, embora não haja nenhuma?"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "navegador parece estar faltando recursos"
        }
        } finally {
        }
      },
      onDecode(decodedString){
        this.decodedString = decodedString;
        const pattern = /;P:(.+?);/; // Expressão regular para encontrar a senha entre ";P:" e ";"
        const match = decodedString.match(pattern);
        if (match) {
          this.decodedString = match[1]; // A senha é capturada no primeiro grupo de captura (índice 1)
        }
      }
  }
};
</script>

<style scoped>
button {
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
}
.group{
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.391);
}

.container-cam {
  margin: 200px auto;
  width: 350px;
  height: 500px;
  border-radius: 10px;
  padding: 70px;
  background-image: url('https://www.rocketseat.com.br/discover/devlinks/bg-desktop.jpg');
  background-position: center center;
  background-size: cover;
  box-shadow: 0 0 300px 10px #5d2d80;
  border: 2px solid #be64ff;
}
.webcam {
  margin: 10px auto;
  width: 190px;
  height: 190px;
  border-radius: 10px;
  background: linear-gradient(white, white) padding-box, linear-gradient(to right, #bc5fff, #fbf7ff) border-box;
  border: 8px solid transparent;
}

p {
  margin: 30px 0;
  width: 200px;
  font-size: 13px;
}

a {
  color: #fff;
  text-decoration: none;
}


@media (max-width: 800px) {
  .container-cam {
    display: grid;
    justify-content: center;
    max-width: 300px;
    margin-top: 100px;
  }
  .webcam {
    width: 170px;
    height: 170px;
  }

  button {
    margin: 0 auto;
    width: 120px;
    font-size: 10px;
  }
}

</style>
