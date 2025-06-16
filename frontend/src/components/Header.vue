<template>
  <HeaderHomePage />

  <header class="font mb-5 custom-header">
    <nav class="navbar navbar-expand-lg rounded custom-navbar">
      <div class="container-fluid justify-content-center">
        <div class="d-flex justify-content-center flex-wrap">

          <router-link to="/" class="btn btn-outline-primary me-2 hover-zoom"
              @click="popClickSound" style="background-color: #71C17D;
              color: #5e8063; border-color: #548C5C;"> Home</router-link>

          <router-link to="/SectionOne" class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #B0ADE2; color: #7b79a1;
              border-color: #5A5781;"> Who am I?</router-link>

          <router-link to="/SectionTwo" class="btn btn-outline-primary me-2
              hover-zoom" @click="popClickSound"
              style="background-color: #FF748F; color: #b3596a;
              border-color: #C54D64;"> My family</router-link>

          <router-link to="/SectionThreePartOne"
              class="btn btn-outline-primary me-2 hover-zoom"
              @click="popClickSound" style="background-color: #FFE0B7;
              color: #8C595F; border-color: #8C595F;"> My school, part 1
          </router-link>

          <router-link to="/SectionThreePartTwo"
              class="btn btn-outline-primary me-2 hover-zoom"
              @click="popClickSound"
              style="background-color: #FFE0B7; color: #8C595F;
              border-color: #8C595F;"> My school, part 2 </router-link>

          <router-link to="/SectionFour" class="btn btn-outline-primary me-2
              hover-zoom" @click="popClickSound"
              style="background-color: #5FCDFF; color: #4585a2;
              border-color: #2E6984;"> Feelings and Likes </router-link>  
              
          <router-link to="/EndSection" class="btn btn-outline-primary me-2
              hover-zoom" @click="popClickSound"
              style="background-color: #FFAf7A; color: #B7410E;
              border-color: #B7410E;"> End of activity </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderHomePage from "./LogoHeader.vue";

  export default {
    components: {
      HeaderHomePage,
    },
    name: 'HeaderPage',

  methods: {
    popClickSound() {
      const popSound = new Audio(require('@/assets/sounds/PopSound.mp3'));
      popSound.play();
    },
  }
};
</script>