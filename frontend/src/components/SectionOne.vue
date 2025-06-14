<template>
  <div>
    <HeaderPage />
  </div>

  <div class="body font container my-5">
    <div class="row justify-content-center text-center">
      <div class="col-auto">
        <h1 class="font" style="color: #7b79a1;">Section: Who am I?</h1>
        <h1 class="font hover-zoom" style="color: #b3596a;">
          What is your name?</h1>
        <img src="../assets/images/Section1/Mirror.png"
            alt="Mirror"
            class="img-fluid hover-zoom"
            style="max-width: 300px; margin-top: 20px; margin-bottom: 20px"
            @click="popClickSound"/>
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