<template>
  <div>
    <HeaderPage />
  </div>

  <div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <div class="col-auto">
        <h1 class="font" style="color: #7b79a1;">Section: Who am I?</h1>
        <h1 class="font hover-zoom" style="color: #b3596a;">
          What is your name?
        </h1>
        <img
          src="../assets/images/Section1/Mirror.png"
          alt="Mirror"
          class="img-fluid hover-zoom"
          style="max-width: 300px; margin-top: 20px; margin-bottom: 10px"
          @click="showModal = true"/>

        <Reward v-model:visible="showModal">
          <img src="../assets/images/Reward/Section1.gif" alt="Loading GIF"
            style="max-width:800px; height:auto;" />
          <h1 class="font hover-zoom" style="color: #b3596a;">
            Good job! You have a very nice name! </h1>
        </Reward>

        <div>
          <h4
            class="bounce-text multicolor-text"
            style="color: #7b79a1; margin-top: 10px;">
            Click the mirror when you're done!
          </h4>
        </div>
      </div>
    </div>
  </div>

  <CreditsFooter />
</template>

<script>
import HeaderPage from "./Header.vue";
import CreditsFooter from "./Credits.vue";
import Reward from "./Reward.vue"

export default {
  components: {
    HeaderPage,
    CreditsFooter,
    Reward
  },
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      const entranceSection1 = new
        Audio(require('../assets/sounds/Section1/WhatIsYourName.mp3'));
      entranceSection1.play();
    }, 1000);
  },
};
</script>