<template>
  <v-container id="my-portfolio" class="my-16">
    <v-row class="mb-10">
      <v-col class="text-center">
        <h1 class="my-2">My Portfolio</h1>
        <h3 class="mb-10">
          Below are some of the projects that I was engaged in
        </h3>
      </v-col>
    </v-row>

    <v-row
      class="my-5"
      :post="post"
      v-for="(post, index) in projects"
      :key="index"
    >
      <v-col
        class="d-flex justify-center align-center blog-content"
        :order-sm="post.number % 2 == 0 ? 1 : 2"
        sm="5"
      >
        <div class="content">
          <h2>{{ post.name }}</h2>
          <p>{{ post.info }}</p>
          <div>
            <v-btn
              class="orange mr-3"
              :href="post.linkToApp"
              rounded
              target="_blank"
            >
              <v-icon class="mr-2">mdi-trending-up</v-icon>
              Live Preview
            </v-btn>
            <v-btn :href="post.linkToCode" rounded target="_blank">
              <v-icon class="mr-2">mdi-github</v-icon>GitHub</v-btn
            >
          </div>
        </div>
      </v-col>

      <v-col
        class="d-flex justify-center align-center pa-0 blog-image"
        sm="7"
        cols="12"
        :order-sm="post.number % 2 == 0 ? 2 : 1"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            style="cursor: pointer"
            width="100%"
            height="auto"
            class="d-flex align-center ma-5"
          >
            <v-img
              width="70%"
              :aspect-ratio="16 / 9"
              :src="require(`../assets/Images/Project/${post.photo}.png`)"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex flex-column transition-fast-in-fast-out v-card--reveal text-center orange darken-2"
                  style="height: 100%"
                >
                  <p class="pa-3">
                    {{ post.details }}
                  </p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Movie App",
          number: "1",
          photo: "movieApp",
          linkToApp: "https://vue-binge-watch.web.app/",
          linkToCode: "https://github.com/waseyhasankhan/vue-binge-watch",
          info: "An app made purely with VueJS and with the help of TMDB API to fetch the desired movies",
          details:
            "Here you can watch your favorite movies, get information of your favorite superstar. This app uses the core functionalities of VueJS and its features like Vue-Router, VueX etc. ",
        },
        {
          name: "Bagels App",
          number: "2",
          photo: "bagelsApp",
          linkToApp: "https://bagel-app.netlify.app/",
          linkToCode: "https://github.com/waseyhasankhan/bagel",
          info: "An app, similar to an e-commerce shop, where you can order your favorite and yummy bagels ",
          details:
            "Bagel app is made to serve the purpose of how an e-commerce shop works. First of all, it needs an authentic user with a genuine ID and a Password, and the routes (admin dashboard is among one of them) are not for everyone. So, they are allowed for authentic personnels only. This was done by using navigating guards.",
        },
        {
          name: "Find a Coach app",
          number: "3",
          photo: "findCoachApp",
          linkToApp: "https://finding-a-coach-app.web.app/",
          linkToCode: "https://github.com/waseyhasankhan/finding-a-coach-app",
          info: "Find a coach app was is all-in-one piece app made with VueJS",
          details:
            "Suppose you want to hire a coach. Traditionally, you go to a website, sign in, select your fields, contact a coach and you LEARN. The same happens here. P.S.: You can also register yourself as a coach!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
  color: #4a171e;
  font-weight: 600;
}

h2 {
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  //   background-color: orange;
  margin-bottom: 15px;
  display: inline-block;
  color: #4a171e;
  text-shadow: 4px 4px orange;
}

h3 {
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  color: #4a171e;
}
p {
  color: #4a171e;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 60px 10px;
    text-align: center;
    width: 100% !important;
  }
}
.blog-content {
  @media (max-width: 1400px) {
    order: 1;
  }
}

.blog-image {
  @media (max-width: 1400px) {
    order: 2;
  }
}

.col {
  padding: 0;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
