<template>
  <v-carousel style="height:90vh;">
    <h2 class="center-class">{{ title }}</h2>
    <v-carousel-item v-for="(img, index) in urlImages" :key="index">
        <v-img class="img-carousel" :src="img"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
data:() => ({
  title:'Mapa de los lugares para depositar los diferentes residuos en el ITQ ',
  urlImages : 
  [
    require('@/assets/mapa_completo.png'),
    require('@/assets/pt1.png'),
    require('@/assets/pt2.png'),
    require('@/assets/pt3.png'),
    require('@/assets/pt4.png'),
  ] 

}),

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Poetsen+One&family=Rubik+Mono+One&display=swap');
.center-class{
  text-align: center;
  font-family: "Rubik Mono One", monospace;
  font-size: 40px;
  padding-top: 2%;
  color: #F1F1F1;
}
.img-carousel{
  text-align: center;
  width:80%;
}
.v-carousel{
  background-color: #A2C579;
}


</style>