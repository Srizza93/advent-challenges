<template>
  <div class="menu-container" tabindex="0" @blur="closeMenu">
    <div class="menu-opener" @click="toggleMenu">
      <img
        class="menu-opener_icon"
        :src="getImgUrl('icon-home.png')"
        alt="home-icon"
      />
    </div>
    <ul class="challenges-container">
      <li
        class="challenges-container_challenge"
        v-for="challenge in mcomps"
        :key="challenge.id + challenge.name"
        @click="scrollToChallenge(challenge.class)"
      >
        {{ challenge.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    mcomps: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../assets", false, /\.png$/);
      return assets("./" + pic);
    },
    toggleMenu() {
      document.querySelector(".menu-container").classList.toggle("show-menu");
    },
    closeMenu() {
      document.querySelector(".menu-container").classList.remove("show-menu");
    },
    scrollToChallenge(challenge) {
      document.querySelector(`.${challenge}`).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
  },
};
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-right: 2px solid white;
  transition: 0.5s;
  background-color: #333;
  z-index: 9999;
}
.challenges-container {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  overflow: hidden;
  list-style-type: none;
}
.challenges-container_challenge {
  margin: 10px 0;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
.challenges-container_challenge:hover {
  opacity: 0.7;
}
.menu-opener {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: -67px;
  padding: 15px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-radius: 0 0 25px 0;
  font-size: 20px;
  color: white;
  background-color: #333;
  cursor: pointer;
}
.menu-opener_icon {
  width: 35px;
  height: 35px;
}
.show-menu {
  width: 300px;
  padding: 50px;
}
</style>
