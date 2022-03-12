<template>
  <v-app>
    <v-main>
      <app-bar />
      <my-intro />
      <about-me />
      <my-portfolio />
      <contact-me />
      <!-- <router-view /> -->
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import MyIntro from "./views/MyIntro.vue";
import AboutMe from "./views/AboutMe.vue";
import MyPortfolio from "./views/MyPortfolio.vue";
import ContactMe from "./views/ContactMe.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    AppBar,
    MyIntro,
    AboutMe,
    MyPortfolio,
    ContactMe,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Henny+Penny&family=Montserrat:wght@300;400;500;700&family=Open+Sans:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "Montserrat";
  // font-family: "Henny Penny", cursive;
  // background-color: #e2b143;
  // color: #4a171e;
}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
