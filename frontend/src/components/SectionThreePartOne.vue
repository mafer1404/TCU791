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
            alt="Mom"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <button class="btn btn-outline-primary me-2
            hover-zoom" style="background-color: #E490B7; color: #FFFFFF;
            border-color: #5A5781; margin-top: 20px;" @click="popClickSound">
            Teacher</button>
        </div>
      </div>

      <div class="col-auto">
        <img src="../assets/images/Section3Part1/Student1.png"
            alt="Dad"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <img src="../assets/images/Section3Part1/Student2.png"
            alt="Grandma"
            class="img-fluid hover-zoom"
            style="max-width: 200px; margin-top: 20px" @click="popClickSound"/>
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #02CD8C; color: #FFFFFF;
              border-color: #824E32; margin-top: 20px;" @click="popClickSound">
              Students</button>
         </div>
        </div>
    </div>

      <div class="col-auto">
        <img
          src="../assets/images/Section3Part1/School.png"
          alt="Grandpa"
          class="img-fluid hover-zoom"
          style="max-width: 200px; margin-top: 20px"
          @click="popClickSound"
        />
        <div class="col-auto">
          <div class="col-auto">
            <button class="btn btn-outline-primary me-2
              hover-zoom" style="background-color: #DC8758; color: #FFFFFF;
              border-color: #424A5E; margin-top: 20px;" @click="popClickSound">
              School</button>
         </div>
        </div>
      </div>
    </div>
  </div>

  <CreditsFooter />
</template>

<script>
import HeaderPage from "./Header.vue";
import CreditsFooter from "./Credits.vue";
export default {
  components: {
    HeaderPage,
    CreditsFooter
  },
};
</script>