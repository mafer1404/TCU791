<template>
  <div>
    <HeaderPage />
  </div>

  <div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <h1 class="font" style="color: #5555DC">My school</h1>
      <h1 class="font hover-zoom" style="color: #55BCDC">
        What do you like to do at school?</h1>
      <div class="col-auto">
        <img src="../assets/images/Section3Part2/playing.png"
            alt="Play"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <button class="btn btn-outline-primary me-2
            hover-zoom" style="background-color: #E490B7; color: #FFFFFF;
            border-color: #5A5781; margin-top: 20px;" @click="playSound">
            Play</button>
        </div>
      </div>

      <div class="col-auto">
        <img src="../assets/images/Section3Part2/reading.png"
            alt="Read"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>

        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #02CD8C; color: #FFFFFF;
              border-color: #824E32; margin-top: 20px;" @click="readSound">
              Read</button>
         </div>
        </div>
    </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section3Part2/singing.png"
          alt="Sign"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #DC8758; color: #FFFFFF;
              border-color: #424A5E; margin-top: 20px;" @click="singSound">
              Sing</button>
         </div>
        </div>
      </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section3Part2/drawing.png"
          alt="Draw"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #FF748F; color: #FFFFFF;
              border-color: #424A5E; margin-top: 20px;" @click="drawSound">
              Draw</button>
         </div>
        </div>
      </div>
    </div>

    <Reward v-model:visible="showModal">
      <img src="../assets/images/Reward/Section3Part2.gif" alt="Loading GIF"
        style="max-width:800px; height:auto;" />
      <h1 class="font hover-zoom" style="color: #55BCDC;">
        Good job! School is fun! </h1>
    </Reward>

    <div class="d-flex justify-content-center align-items-center mt-5">
      <img
        src="../assets/images/Reward/RewardGift.png"
        alt="Siblings"
        class="img-fluid hover-zoom"
        style="max-width: 100px; margin-right: 20px; cursor: pointer"
        @click="showModal = true"/>
      <h4
        class="bounce-text multicolor-text"
        style="color: #7b79a1; margin: 0;"
      >
        Click on the gift when you're done!
      </h4>
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
  mounted() {
    setTimeout(() => {
      const entranceSection3PartOne = new
        Audio(require('../assets/sounds/Section3/WhatDoYouLikeToDoAtSchool.mp3'));
      entranceSection3PartOne.play().catch(() => {});
    }, 1000);
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    async playSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section3/PlayActivity.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async readSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section3/ReadActivity.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async singSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section3/SingActivity.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async drawSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section3/DrawActivity.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async popClickSound() {
      try {
        const popSound = new Audio(require('@/assets/sounds/PopSound.mp3'));
        await popSound.play();
      } catch (e) {
        //
      }
    }
  }
};
</script>
