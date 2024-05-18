<template>
  <div class="trash-recognition">
    <div v-if="!isGameFinished">
      <div class="question">
        <v-row>
          <v-col align="left">
            <p class="question-header">{{currentTrashElementIndex+1}}/{{ trashSrc.length }}</p>
          </v-col>
          <v-col>
            <p class="question-header">Aciertos: {{aciertosCount}} - Fallos: {{ fallosCount }}</p>
          </v-col>
        </v-row>
        <v-img :src="currentTrashElement.image" width="400" height="400" style="display: block; margin: auto;"></v-img>
        <p style="text-align: center;">¿A qué contenedor pertenece esta basura ({{ currentTrashElement.text }})?</p>
      </div>
      <div class="options-container">
        <div v-for="(option, index) in options" :key="index" class="option" @click="checkAnswer(option,index)">
          <v-card :color="getColor(index)" width="200" style="overflow-y:auto">
            <img class="options" :src="option.image" :alt="option.text">
            <p>{{ option.text }}</p>
          </v-card>
        </div>
      </div>
      <v-dialog persistent class="result" v-model="showResult">
        <v-card>
          <v-card-title>{{ result }}</v-card-title>
          <v-card-text>
            <span v-if="isResultSucess">¡Felicidades! Has acertado la respuesta.</span>
            <span v-else>¡Lo siento! La respuesta correcta era {{ correctAnswer }}.</span>
          </v-card-text>
          <img :src="resultGif" alt="Resultado">
          <v-card-actions>
            <v-btn color="secondary" @click="setupNextElement()">Siguiente</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div v-else>
      <v-card>
        <v-card-title>¡Juego terminado!</v-card-title>
        <v-card-text>
          <p>Has acertado {{ aciertosCount }} preguntas y has fallado {{ fallosCount }} preguntas.</p>
          <p>¡Gracias por jugar!</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setup();
  },
  data() {
    return {
      currentTrashElement:{},
      currentTrashElementIndex: 0,
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
      aciertosCount: 0,
      fallosCount: 0,
      selectedCard: null, // Índice de la carta seleccionada
      result:'',
      isResultSucess: false, // Indicador de resultado correcto
      resultColor: null, // Color de fondo del resultado
      correctAnswer: null, // Opción correcta
      userAnswer: null, // Respuesta del usuario
      showResult: false, // Indicador para mostrar el resultado
      resultGif: '', // URL del gif de victoria o derrota
      isGameFinished: false
    };
  },
  methods: {
    checkAnswer(option, index) {
      this.userAnswer = option.value;
      this.selectedCard = index 
      if (this.userAnswer === this.correctAnswer) {
        // El usuario acertó la respuesta
        this.aciertosCount++;
        this.resultColor = 'success' 
        this.isResultSucess = true
        this.result = '¡Correcto!'
        this.fetchGif('winner')
      } else {
        // El usuario erró la respuesta
        this.fallosCount++;
        this.fetchGif('loser')
        this.resultColor = 'error'
        this.result = '¡Incorrecto!'
        this.isResultSucess = false
      }
      this.showResult = true;
      this.currentTrashElementIndex ++;
      this.setup();

    },
    getColor(index){
      if(index == this.selectedCard){
        return this.isResultSucess ? 'success' : 'error' //Para la card seleccionada
      }
      return ''; //Para las cards no seleccionadas
    },
    setup() {
      if( this.currentTrashElementIndex < this.trashSrc.length ){
        this.currentTrashElement = this.trashSrc[this.currentTrashElementIndex];
        this.correctAnswer = this.trashSrc[this.currentTrashElementIndex].categoria
      }else{
        this.isGameFinished = true
      }
    },
    setupNextElement(){
      this.showResult = false
      this.selectedCard = null
      this.resultGif = ''
      this.getColor(null)
    },
     async fetchGif(searchTerm) {
      const apiKey = 'rs76t7Qf56qdAj8a8sNuYyzkSQ3A88dr';
      const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;
      try{
      await fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          this.resultGif = data.data.images.original.url;
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
  width: 100;
  transition:dialog-bottom-transition;
  text-align: center;
  font-size: 60px;
  color: #D9EDBF;
  background-color: #90D26D;
  padding-top: 50px;
}
.question-header{
  padding-left: 2rem;
  font-size:x-large

}
</style>
