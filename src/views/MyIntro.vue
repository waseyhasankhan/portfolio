<template>
  <v-container id="my-intro">
    <v-row align="center" justify="center"
      ><v-col
        order="2"
        order-sm="1"
        sm="7"
        md="4"
        cols="12"
        align-self="center"
      >
        <p class="hero-text-1">
          Hello 👋, my name is <br />
          <span class="name">Wasey Hasan Khan</span> <br />
          A Front-end web developer
        </p>
        <!-- <div class="hero-text-2">A front-end web developer</div> -->
      </v-col>

      <v-col
        class="text-center"
        order="1"
        cols="10"
        sm="4"
        md="4"
        order-sm="2"
        offset-md="2"
      >
        <v-avatar size="250">
          <v-img src="../assets/Images/hero_avatar.jpg"></v-img>
        </v-avatar>
      </v-col>
    </v-row>

    <v-row justify="end">
      <a href="#app-bar" class="reachToTop">
        <v-icon class="orange--text" x-large>mdi-gesture-swipe-up</v-icon></a
      >
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
}

.v-avatar {
  border: 2px dashed #4a171e;
}

.row {
  height: 90%;
}
.hero-text-1 {
  font-size: 50px;
  font-weight: 200;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 25px;
    font-weight: 100;
  }
}
.name {
  font-size: 70px;
  text-align: center;
  font-family: "Henny Penny", cursive;
  font-weight: 500;
  color: #4a171e;
}
.hero-text-2 {
  font-size: 25px;
}
#my-intro {
  //   background: linear-gradient(to right, #e2b143, #4a171e);
}

.reachToTop {
  position: fixed;
  text-decoration: none;
  bottom: 50px;
  right: 15px;
}
</style>
