<template>
  <div>
    <h2 class="center-class">{{ title }}</h2>
    <v-carousel>
      <v-carousel-item v-for="(img, index) in urlImages" :key="index">
          <v-img class="img-carousel" :src="img"></v-img>
      </v-carousel-item>
    </v-carousel>
    <h2 class="center-class"></h2>
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
.center-class{
  text-align: center;
  font-family: 'Poetsen One', sans-serif;
  font-size: 50px;
  padding-top: 2%;
  background: linear-gradient(to bottom,#FFFFDD ,  #CFFF8D);
  color: #2C7865; 
  padding: 20px;
}
.img-carousel{
  text-align: center;
  width:100%;
}
.v-carousel{
  background-color: #A2C579;
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