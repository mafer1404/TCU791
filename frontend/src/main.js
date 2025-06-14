import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import SectionThreePartOne from "./components/SectionThreePartOne.vue";
import SectionThreePartTwo from "./components/SectionThreePartTwo.vue";
import SectionFour from "./components/SectionFour.vue";

import "./assets/css/FontBody.css"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/SectionOne", name: "SectionOne", component: SectionOne },
    { path: "/SectionTwo", name: "SectionTwo", component: SectionTwo },
    { path: "/SectionThreePartOne", name: "SectionThreePartOne"
      , component: SectionThreePartOne },
    { path: "/SectionThreePartTwo", name: "SectionThreePartTwo"
      , component: SectionThreePartTwo },
    { path: "/SectionFour", name: "SectionFour"
      , component: SectionFour }
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
