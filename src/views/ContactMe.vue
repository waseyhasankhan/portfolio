<template>
  <v-container id="contact-me">
    <v-row>
      <v-col
        class="text-center"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <h1>Contact Me</h1>
        <h3 class="my-10">
          You can reach me out at : <br />
          hadihasankhan1928@gmail.com
        </h3>

        <div class="resume">
          <a
            href="../assets/ResumeFinal.pdf"
            class="btnResume"
            download="CV_Wasey-Hasan-Khan"
            >Resume</a
          >
        </div>

        <div>
          <v-btn
            small
            fab
            href="https://github.com/waseyhasankhan?tab=repositories"
            target="_blank"
          >
            <v-icon large>mdi-github</v-icon>
          </v-btn>

          <v-btn
            small
            fab
            target="_blank"
            href="https://www.linkedin.com/in/wasey-hasan-khan-7b56941b1"
          >
            <v-icon large>mdi-linkedin</v-icon>
          </v-btn>

          <v-btn
            small
            fab
            target="_blank"
            href="https://twitter.com/HasanWasey"
          >
            <v-icon large>mdi-twitter</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.resume {
  width: 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid orange;
  border-radius: 15px;
  margin: 25px 0;
  padding: 10px;
  @media (max-width: 600px) {
    width: 30%;
  }
}

.btnResume {
  text-decoration: none;
  color: #4a171e;
  // font-size: 20px;
  transition: 0.5s ease all;

  &:hover {
    color: orange;
    transform: scale(1.1);
  }
}

.v-btn {
  background-color: white;
  color: #000;
  margin: 0 30px 0 0;

  &:hover {
    color: orange;
  }
}

h3 {
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  font-weight: 400;
  @media (max-width: 400px) {
    font-size: 16px;
    font-weight: 300;
  }
}
</style>
