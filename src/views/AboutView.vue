<template>
  <div class="group">
    <p>{{error}}</p>
    <p>{{decodedString}}</p>
    <button @click="torch=!torch">ATIVAR FLASH</button>
    <div class="webcam">
      <qrcode-stream :torch="torch" @init="onInit" @decode="onDecode"></qrcode-stream>
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
          // hide loading indicator
        }
      },
      onDecode(decodedString){
        this.decodedString = decodedString;
      }
  }
};
</script>

<style scoped>
.group{
  margin: 0 auto;
  max-width: 1200px;
  background-color: red;
}
.webcam{
  margin: 0 auto;
  width: 270px;
  height: 270px;
  border-radius: 50px;
}
</style>
