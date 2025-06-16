<template>
  <div>
    <HeaderPage />
  </div>

  <div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <h1 class="font" style="color: #DC55C3">Feelings and Likes</h1>
      <h1 class="font hover-zoom" style="color: #9655DC">
        How do you feel today?</h1>
      <div class="col-auto">
        <img src="../assets/images/Section4/happyHeart.png"
            alt="Happy"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <button class="btn btn-outline-primary me-2
            hover-zoom" style="background-color: #E490B7; color: #FFFFFF;
            border-color: #5A5781; margin-top: 20px; margin-bottom: 20px;"
            @click="happySound">
            Happy</button>
        </div>

      </div>
      <div class="col-auto">
        <img src="../assets/images/Section4/sadHeart.png"
            alt="Sad"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #02CD8C; color: #FFFFFF;
              border-color: #A17C4B; margin-top: 20px;" @click="sadSound">
              Sad</button>
         </div>
        </div>
      </div>

      <div class="col-auto">
        <img src="../assets/images/Section4/angryHeart.png"
            alt="Angry"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #FDCB89; color: #FFFFFF;
              border-color: #824E32; margin-top: 20px;" @click="angrySound">
              Angry</button>
         </div>
        </div>
      </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section4/loveHeart.png"
          alt="Loved"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #7187BE; color: #FFFFFF;
              border-color: #424A5E; margin-top: 20px;" @click="lovedSound">
              Loved</button>
         </div>
        </div>
      </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section4/tiredHeart.png"
          alt="Tired"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #B0ADE2; color: #FFFFFF;
              border-color: #5A5781; margin-top: 20px;" @click="tiredSound">
              Tired</button>
         </div>
        </div>
      </div>
    </div>

    <Reward v-model:visible="showModal">
      <img src="../assets/images/Reward/Section4.gif" alt="Loading GIF"
        style="max-width:800px; height:auto;" />
      <h1 class="font hover-zoom" style="color: #DC55C3;">
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
        Click the gift when you're done!
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
        Audio(require('../assets/sounds/Section4/HowDoYouFeelToday.mp3'));
      entranceSection3PartOne.play().catch(() => {});
    }, 1000);
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    async happySound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section4/Happy.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async sadSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section4/Sad.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async tiredSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section4/Tired.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async lovedSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section4/Loved.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async angrySound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section4/Angry.mp3'));
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