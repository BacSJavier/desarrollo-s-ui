<template>
    <div class="about-us">
      <div v-for="(teamMember, index) in team" :key="index" class="team-member">
        <div class="member-info">
          <h2>{{ teamMember.name }}</h2>
          <p>{{ teamMember.role }}</p>
        </div>
        <div class="member-image">
          <img :src="teamMember.image" :alt="teamMember.name">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: [
          {
            name: 'Javier Bacilio Sánchez',
            role: 'Programador',
            image: require('@/assets/programador.jpg')
          },
          {
            name: 'Shaina Alexandra Xochitiotzi',
            role: 'Diseñadora UX/UI',
            image: require('@/assets/diseñadora.jpg')
          },
          {
            name: 'Paulina Bautista',
            role: 'Diseñadora Grafica',
            image: require('@/assets/diseñadora2.jpeg')
          },
          {
            name: 'Sergio Arturo',
            role: 'Promotor',
            image: require('@/assets/promotor.png')
          }
        ]
      };
    }
  };
  </script>
  
<style scoped>
.about-us {
  padding-top: 3%;
  padding-bottom: 4%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to bottom,#FFFFDD ,  #CFFF8D); /* Color de fondo principal */
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.member-info {
  margin-bottom: 20px;
  text-align: center;
  background-color: #81C784 ; /* Color de fondo del cuadro de información */
  padding: 10px; /* Espaciado interno */
  border-radius: 10px; /* Bordes redondeados */
}

.member-info h2 {
  color: #024102  ; /* Color del texto del nombre */
  margin-bottom: 5px; /* Espaciado inferior */
}

.member-info p {
  color: #FFFFFF; /* Color del texto del rol */
}

.member-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%; /* Hace la imagen circular */
  border: 5px solid #FF9800; /* Borde de la imagen */
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
  
