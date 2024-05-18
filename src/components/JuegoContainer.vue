<template>
  <div class="trash-recognition">
    <div class="question">
      <v-img :src="randomImageSrc.image" width="400" height="400" style="display: block; margin: auto;"></v-img>
      <p style="text-align: center;">¿A qué contenedor pertenece esta basura ({{ randomImageSrc.text }})?</p>
    </div>
    <div class="options-container">
      <div v-for="(option, index) in options" :key="index" class="option" @click="checkAnswer(option)">
        <v-card width="200" style="overflow-y:auto">
          <img class="options" :src="option.image" :alt="option.text">
          <p>{{ option.text }}</p>
        </v-card>
      </div>
    </div>
    <div class="result" v-if="showResult">
      <img :src="resultGif" alt="Resultado">
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.selectRandomImage();
    window.addEventListener('beforeunload', this.selectRandomImage);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.selectRandomImage);
  },
  data() {
    return {
      randomImageSrc:{},
      trashSrc:[
        {text: 'Aceite Quemado', image: require('@/assets/aceite_quemado.jpeg') , categoria: 'LABQUIMICA'},
        {text: 'Botella de Vidrio', image: require('@/assets/botella-vidrio.png'), categoria: 'INORGANICO'},
        {text: 'Botella de Plastico(PET)', image: require('@/assets/botella.png'), categoria: 'PLASTICOS'},
        {text: 'Bolsa de Frituras', image: require('@/assets/flaming_hot.jpg'), categoria: 'INORGANICO'},
        {text: 'Manzana', image: require('@/assets/manzana.png'), categoria: 'ORGANICO'},
        {text: 'Papel', image: require('@/assets/papel.jpg'), categoria: 'ACOPIO'},
        {text: 'Baterias', image: require('@/assets/pila.png'), categoria: 'LABQUIMICA'},
        {text: 'Sandwich', image: require('@/assets/sandwich.jpeg'), categoria: 'ORGANICO'},
      ],
      options: [
        { text: 'Acopio de papel', value: 'ACOPIO', image: require('@/assets/pt1.png') },
        { text: 'Orgánicos', value: 'ORGANICO' ,image: require('@/assets/pt2.png') },
        { text: 'Plásticos', value: 'PLASTICOS' ,image: require('@/assets/pt3.png') },
        { text: 'Inorgánico', value: 'INORGANICO' ,image: require('@/assets/pt4.png') },
        { text: 'Laboratorio de Quimica', value: 'LABQUIMICA' ,image: require('@/assets/pt4.png') },
      ],
      result: null,
      correctAnswer: null, // Opción correcta
      userAnswer: null, // Respuesta del usuario
      showResult: false, // Indicador para mostrar el resultado
      resultGif: '' // URL del gif de victoria o derrota
    };
  },
  methods: {
    checkAnswer(option) {
      this.userAnswer = option.value;
      if (this.userAnswer === this.correctAnswer) {
        // El usuario acertó la respuesta
        this.result = 'ACERTASTE!' 
        this.fetchGif('winner')
      } else {
        // El usuario erró la respuesta
        this.fetchGif('loser')
        this.result = 'FALLASTE!' 
      }
      this.showResult = true;
        // Recargar la página después de 5 segundos
      setTimeout(() => {
        window.location.reload();
      }, 5000); // 5000 milisegundos = 5 segundos

    },
    selectRandomImage() {
      const randomIndex = Math.floor(Math.random() * this.trashSrc.length);
      this.randomImageSrc = this.trashSrc[randomIndex];
      this.correctAnswer = this.trashSrc[randomIndex].categoria
    },
     async fetchGif(searchTerm) {
      const apiKey = 'rs76t7Qf56qdAj8a8sNuYyzkSQ3A88dr';
      const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;
      try{
      await fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          this.resultGif = data.data.images.original.url;
          console.log(this.resultGif)
        })
      }catch(error){
        this.resultGif = null
      }
  }
}};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');

.trash-recognition {
  background: linear-gradient(to bottom,#FFFFDD ,  #CFFF8D);
  font-family: 'Poetsen One', sans-serif;
  color: #2C7865; /* Color de texto principal */
  font-size: 40px;
  padding-top: 3%;
}

.question {
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
}

.options-container {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.options {
  width: 200px;
  height: 200px;
}

.option {
  margin-right: 10px;
}

.result {
  text-align: center;
  font-size: 60px;
  color: #D9EDBF;
  background-color: #90D26D;
  padding-top: 50px;
}

/*
verde claro: D9EDBF
naranja: FF9800
verde oscuro: 2C7865
verde medio: 90D26D
verde claro fosfo: CFFF8D
beige: FFFFDD
*/

</style>
