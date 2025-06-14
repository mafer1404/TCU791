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
            border-color: #5A5781; margin-top: 20px;" @click="popClickSound">
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
              border-color: #824E32; margin-top: 20px;" @click="popClickSound">
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
              border-color: #424A5E; margin-top: 20px;" @click="popClickSound">
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
              border-color: #424A5E; margin-top: 20px;" @click="popClickSound">
              Draw</button>
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