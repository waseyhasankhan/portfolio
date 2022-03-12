<template>
  <v-container fluid id="app-bar">
    <v-app-bar app color="" height="100px" hide-on-scroll>
      <v-row>
        <v-col offset-sm="1" md="1" sm="2" cols="2">
          <!-- <a href="#my-intro">
            <div style="width: 40px; height: 40px" class="links">"WHK_"</div></a
          > -->
          <div style="width: 55px; height: 40px" class="links">
            WHK<span class="blink">_</span>
          </div>
        </v-col>

        <v-col
          v-show="!mobile"
          cols="12"
          offset-sm="1"
          offset-md="3"
          offset-lg="5"
          lg="5"
          md="6"
          sm="8"
          class="f2"
        >
          <a href="#about-me" class="links"> AboutMe</a>
          <a href="#my-portfolio" class="links">Portfolio</a>
          <a href="#contact-me" class="links">Contact</a>
          
        </v-col>

        <v-btn
          @click="toggleMobileNav"
          color="black ml-4"
          small
          fab
          v-show="mobile"
          class="menu-icon"
        >
          <v-icon class="white--text"
            >mdi-{{ mobileNav === false ? "dots-hexagon" : "close" }}</v-icon
          >
        </v-btn>
      </v-row>
    </v-app-bar>

    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <a href="#about-me" @click="toggleMobileNav" class="links links-mobile">
          AboutMe
        </a>
        <a
          href="#my-portfolio"
          @click="toggleMobileNav"
          class="links links-mobile"
        >
          Portfolio
        </a>
        <a
          href="#contact-me"
          @click="toggleMobileNav"
          class="links links-mobile"
        >
          Contact
        </a>
      </ul>
    </transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
  beforeMount() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        return (this.mobile = true);
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.links {
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin: 0 24px;
  color: #4a171e;
  border-bottom: 2px solid transparent;
  transition: 0.2s ease-in all;

  &:hover,
  &:focus {
    border-bottom-color: #4a171e;
  }
  &-mobile {
    color: #e2b143;
    margin: 40px 0;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}

.mobile-nav-enter {
  transform: translateX(-600px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-600px);
}
.menu-icon {
  position: absolute;
  cursor: pointer;
  top: 30px;
  right: 30px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4a171e;
  width: 100%;
  height: 85%;
  z-index: 10;
  padding: 20px;
  position: fixed;
  top: 12%;
  left: 0;
}
.f2 {
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
    padding: 0;
  }
}
.blink {
  animation: blink 1s steps(1, end) infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
