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
            border-color: #5A5781; margin-top: 20px;" @click="popClickSound">
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
              border-color: #A17C4B; margin-top: 20px;" @click="popClickSound">
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
              border-color: #824E32; margin-top: 20px;" @click="popClickSound">
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
              border-color: #424A5E; margin-top: 20px;" @click="popClickSound">
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
              border-color: #5A5781; margin-top: 20px;" @click="popClickSound">
              Siblings</button>
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