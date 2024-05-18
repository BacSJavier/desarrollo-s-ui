<template>
  <v-app>
    <v-app-bar app class="barra">
      <v-container>
        <v-row align="center">
          <v-col cols="auto">
            <v-toolbar-title>Reciclaje ITQ</v-toolbar-title>
          </v-col>
          <v-col cols="auto">
            <v-btn icon @click.stop="drawer = !drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-row justify="center">
              <v-btn text to="/">Home</v-btn>
              <v-btn text to="/juego">Juego</v-btn>
              <v-btn text to="/about">Acerca de nosotros</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HomePage from './components/HomePage.vue';

export default {
  name: 'App',

  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.barra {
  background-color: #FF9800 !important;
}

/* Otros colores para referencia */
  /*
  verde claro: #D9EDBF;
  naranja: #FF9800;
  verde oscuro: #2C7865;
  verde medio: #90D26D;
  verde claro fosfo: #CFFF8D;
  beige: #FFFFDD;
  */
</style>
