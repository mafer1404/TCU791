<template>
  <div>
    <HeaderPage />
  </div>

  <div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <h1 class="font" style="color: #E490B7">My family</h1>
      <h1 class="font hover-zoom" style="color: #724890">
        Who is in your family?</h1>
      <div class="col-auto">
        <img src="../assets/images/Section2/Mom.png"
            alt="Mom"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <button class="btn btn-outline-primary me-2
            hover-zoom" style="background-color: #E490B7; color: #FFFFFF;
            border-color: #5A5781; margin-top: 20px;" @click="momSound">
            Mom</button>
        </div>

      </div>
      <div class="col-auto">
        <img src="../assets/images/Section2/Dad.png"
            alt="Dad"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #02CD8C; color: #FFFFFF;
              border-color: #A17C4B; margin-top: 20px;" @click="dadSound">
              Dad</button>
         </div>
        </div>
      </div>

      <div class="col-auto">
        <img src="../assets/images/Section2/Grandma.png"
            alt="Grandma"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #FDCB89; color: #FFFFFF;
              border-color: #824E32; margin-top: 20px;" @click="grandmaSound">
              Grandma</button>
         </div>
        </div>
      </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section2/Grandpa.png"
          alt="Grandpa"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #7187BE; color: #FFFFFF;
              border-color: #424A5E; margin-top: 20px;" @click="grandpaSound">
              Grandpa</button>
         </div>
        </div>
      </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section2/Siblings.png"
          alt="Siblings"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #B0ADE2; color: #FFFFFF;
              border-color: #5A5781; margin-top: 20px;" @click="siblingsSound">
              Siblings</button>
         </div>
        </div>
      </div>
    </div>

    <Reward v-model:visible="showModal">
      <img src="../assets/images/Reward/Section2.gif" alt="Loading GIF"
        style="max-width:800px; height:auto;" />
      <h1 class="font hover-zoom" style="color: #E490B7;">
        Good job! You have a lovely family! </h1>
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
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      const entranceSection2 = new
        Audio(require('../assets/sounds/Section2/WhoIsInYourFamily.mp3'));
      entranceSection2.play().catch(() => {});
    }, 1000);
  },
  methods: {
    async momSound() {
      try {
        const sound = new Audio(require('@/assets/sounds/Section2/Mom.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async dadSound() {
      try {
        const sound = new Audio(require('@/assets/sounds/Section2/Dad.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async grandmaSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section2/Grandma.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async grandpaSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section2/Grandpa.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async siblingsSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section2/Siblings.mp3'));
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
