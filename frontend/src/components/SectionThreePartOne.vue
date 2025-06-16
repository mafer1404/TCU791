<template>
  <div>
    <HeaderPage />
  </div>

  <div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <h1 class="font" style="color: #F3DD50">My school</h1>
      <h1 class="font hover-zoom" style="color: #DC7555">
        Parts of the school</h1>
      <div class="col-auto">
        <img src="../assets/images/Section3Part1/Teacher.png"
            alt="Teacher"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <button class="btn btn-outline-primary me-2
            hover-zoom" style="background-color: #E490B7; color: #FFFFFF;
            border-color: #5A5781; margin-top: 20px;" @click="teacherSound">
            Teacher</button>
        </div>
      </div>

      <div class="col-auto">
        <img src="../assets/images/Section3Part1/Student1.png"
            alt="Student1"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <img src="../assets/images/Section3Part1/Student2.png"
            alt="Student2"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #02CD8C; color: #FFFFFF;
              border-color: #824E32; margin-top: 20px;" @click="studentsSound">
              Students</button>
         </div>
        </div>
    </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section3Part1/School.png"
          alt="School"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #DC8758; color: #FFFFFF;
              border-color: #424A5E; margin-top: 20px;" @click="schoolSound">
              School</button>
         </div>
        </div>
      </div>
    </div>

    <Reward v-model:visible="showModal">
      <img src="../assets/images/Reward/Section3Part1.gif" alt="Loading GIF"
        style="max-width:800px; height:auto;" />
      <h1 class="font hover-zoom" style="color: #F3DD50;">
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
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      const entranceSection3PartOne = new
        Audio(require('../assets/sounds/Section3/MySchool.mp3'));
      entranceSection3PartOne.play().catch(() => {});
    }, 1000);
  },
  methods: {
    async schoolSound() {
      try {
        const sound = new Audio(require('@/assets/sounds/Section3/School.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async studentsSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section3/Students.mp3'));
        await sound.play();
      } catch (e) {
        //
      }
    },
    async teacherSound() {
      try {
        const sound = new
          Audio(require('@/assets/sounds/Section3/Teacher.mp3'));
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
