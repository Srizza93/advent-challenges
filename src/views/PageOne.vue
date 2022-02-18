<template>
  <div class="page-container">
    <menu-window :mcomps="mChallenges" />
    <gallery :gcomps="gChallenges" />
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";
import MenuWindow from "../components/Menu.vue";

export default {
  name: "PageOne",
  components: {
    Gallery,
    MenuWindow,
  },
  data() {
    return {
      mChallenges: [
        {
          id: 1,
          name: "E-commerce",
          class: "e-commerce-container",
          compName: "Ecommerce",
        },
        {
          id: 2,
          name: "Piano",
          class: "piano-container",
          compName: "Piano",
        },
        {
          id: 3,
          name: "Compressed FM",
          class: "compressed-container",
          compName: "CompressedFM",
        },
        {
          id: 4,
          name: "Range Slider",
          class: "range-container",
          compName: "RangeSlider",
        },
        {
          id: 5,
          name: "Keyboard",
          class: "keyboard-container",
          compName: "Keyboard",
        },
        {
          id: 6,
          name: "Tip Calculator",
          class: "tip-container",
          compName: "Tip",
        },
        {
          id: 7,
          name: "Timer",
          class: "Timer",
        },
        {
          id: 8,
          name: "Weather",
          class: "weather-container",
          compName: "Weather",
        },
      ],
    };
  },
  computed: {
    gChallenges() {
      return this.mChallenges.map((comp) => comp.compName);
    },
  },
};
</script>

<style></style>
