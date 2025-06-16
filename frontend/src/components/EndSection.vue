<template>
  <div>
    <HeaderPage />
  </div>

<div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <h1 class="font" style="color: #DC55C3">Congratulations!</h1>
      <h1 class="font hover-zoom" style="color: #9655DC">
        You completed the activity</h1>
      <div class="col-auto">
        <img src="../assets/images/Section4/happyHeart.png"
            alt="Heart"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <button class="btn btn-outline-primary me-2
            hover-zoom" style="background-color: #E490B7; color: #FFFFFF;
            border-color: #5A5781; margin-top: 20px; margin-bottom: 20px;"
            @click="endRewardSound">
            Click me!</button>
        </div>
      </div>
    </div>   
  </div>

  <CreditsFooter />
</template>

<script>
import confetti from 'canvas-confetti';
import HeaderPage from "./Header.vue";
import CreditsFooter from "./Credits.vue";

export default {
  components: {
    HeaderPage,
    CreditsFooter
  },
  methods: {
    async popClickSound() {
      try {
        const popSound = new Audio(require('@/assets/sounds/PopSound.mp3'));
        await popSound.play();
      } catch (e) {
        //
      }
    },
    async endRewardSound () {
      try {
        const reward1 = new Audio(require('../assets/sounds/Reward.mp3'));
        reward1.play();

        const reward2 = new Audio(require('../assets/sounds/Yay.mp3'));
        reward2.play();

        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        //
      }
    }
  }
};
</script>
