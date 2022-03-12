import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyIntro from "../views/MyIntro.vue";
import AboutMe from "../views/AboutMe.vue";
import MyPortfolio from "../views/MyPortfolio.vue";
import ContactMe from "../views/ContactMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/my-intro",
    name: "MyIntro",
    component: MyIntro,
    meta: {
      title: "My Intro",
    },
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe,
    meta: {
      title: "About Me",
    },
  },
  {
    path: "/my-portfolio",
    name: "MyPortfolio",
    component: MyPortfolio,
    meta: {
      title: "",
    },
  },
  {
    path: "/contact-me",
    name: "ContactMe",
    component: ContactMe,
    meta: {
      title: "Contact Me",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | Portfolio`;
  next();
});

export default router;
