<template>
  <div>
    <HeaderHomePage />
  </div>

  <div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <div class="col-auto">
        <img src="../assets/images/HomePage/Section1Icon.png"
            alt="Section1"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <span @click="popClickSound">
            <router-link to="/SectionOne" class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #B0ADE2; color: #7b79a1;
              border-color: #5A5781; margin-top: 20px;"> Who am I?</router-link>
          </span>
        </div>

      </div>
      <div class="col-auto">
        <img src="../assets/images/HomePage/Section2Icon.png"
            alt="Section2"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <span @click="popClickSound">
            <router-link to="/SectionTwo" class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #FF748F; color: #b3596a;
              border-color: #C54D64; margin-top: 20px;"> My family
            </router-link>
          </span>
        </div>
      </div>

      <div class="col-auto">
        <img src="../assets/images/HomePage/Section3Icon.png"
            alt="Section3"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <span @click="popClickSound">
            <router-link to="/SectionThreePartOne"
                class="btn btn-outline-primary me-2 hover-zoom"
                style="background-color: #FFE0B7; color: #8C595F;
                border-color: #8C595F; margin-top: 20px;"> My school, part 1
            </router-link>
        </span>
          <span @click="popClickSound">
            <router-link to="/SectionThreePartTwo"
              class="btn btn-outline-primary me-2 hover-zoom"
              style="background-color: #FFE0B7; color: #8C595F;
              border-color: #8C595F; margin-top: 20px;"> My school, part 2
            </router-link>
          </span>
        </div>
      </div>

      <div class="col-auto">
        <img
          src="../assets/images/HomePage/Section4Icon.png"
          alt="Section4"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <span @click="popClickSound">
            <router-link
              to="/SectionFour"
              class="btn btn-outline-primary me-2 hover-zoom"
              style="background-color: #5FCDFF; color: #4585a2;
              border-color: #2E6984; margin-top: 20px;">
              Feelings and Likes
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="row border rounded shadow p-4">
      <div class="col-md-6 text-center">
        <p class="hover-zoom"><b>English version <br></b></p>
        <p class="hover-zoom">
          Go to each section. Click on the words. Listen and repeat them!
          Do this as many times as you want!
        </p>
      </div>

      <div class="col-md-6 text-center">
        <p class="hover-zoom"><b>Spanish version <br></b></p>
        <p class="hover-zoom">
          Vaya a cada una de las secciones. Haga click en cada una de las palabras.
          Escúchelas y repítalas. Haga esto tantas veces como guste!
        </p>
      </div>
    </div>
</div>
  <CreditsFooter />
</template>

<script>
import HeaderHomePage from "./LogoHeader.vue";
import CreditsFooter from "./Credits.vue";
export default {
  components: {
    HeaderHomePage,
    CreditsFooter
  },
  methods: {
    popClickSound() {
      const popSound = new Audio(require('@/assets/sounds/PopSound.mp3'));
      popSound.play();
    },
  }
};
</script>
