<template>
  <div>
    <h2 class="center-class">{{ title }}</h2>
    <div class="content-container">
      <div class="download-button-container">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="downloadImage" icon>
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </template>
          <span>Descargar Mapa</span>
        </v-tooltip>
      </div>
      <div class="image-container">
        <span v-for="mapa in mapas" :key="mapa.id">
          <v-img class="map-image" :src="mapa"></v-img>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data:() => ({
  title:'Mapa de los lugares para depositar los diferentes residuos en el ITQ ',
  mapas : 
  [
    require('@/assets/simbologia.jpg'),
    require('@/assets/mapa_completo.jpg')
  ]
}),
methods: {
  downloadImage() {
      this.mapas.forEach((mapa, index) => {
        const link = document.createElement('a');
        link.href = mapa;
        link.download = `mapa_${index + 1}.jpg`; // Esto nombrará las imágenes como mapa_1.jpg, mapa_2.jpg, etc.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
.center-class{
  text-align: center;
  font-family: 'Poetsen One', sans-serif;
  font-size: 40px;
  padding-top: 2%;
  background: linear-gradient(to bottom,#FFFFDD ,  #CFFF8D);
  color: #2C7865; 
  padding: 20px;
}
.content-container {
  display: flex;
  flex-direction: row;
  align-items: center; /* esto alinea los elementos verticalmente en el centro */
  justify-content: space-around; /* ajusta esto a tu preferencia */
}
.image-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* ajusta esto a tu preferencia */
}
.map-image {
  width: 50%;  /* ajusta esto a tu preferencia */
  height: auto;
  object-fit: contain;
}
.download-button-container {
  text-align: right;
  margin-top: 20px;
}
</style>