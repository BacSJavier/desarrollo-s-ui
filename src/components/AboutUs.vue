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
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .member-info {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .member-image img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  </style>
  