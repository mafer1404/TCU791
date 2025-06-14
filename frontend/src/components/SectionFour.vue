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
            @click="popClickSound">
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
              border-color: #A17C4B; margin-top: 20px;" @click="popClickSound">
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
              border-color: #824E32; margin-top: 20px;" @click="popClickSound">
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
              border-color: #424A5E; margin-top: 20px;" @click="popClickSound">
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
              border-color: #5A5781; margin-top: 20px;" @click="popClickSound">
              Tired</button>
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