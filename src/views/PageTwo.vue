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
  name: "PageTwo",
  components: {
    Gallery,
    MenuWindow,
  },
  data() {
    return {
      mChallenges: [
        {
          id: 1,
          name: "Carousel",
          class: "carousel-container",
          compName: "Carousel",
        },
        {
          id: 2,
          name: "Pin Authorization",
          class: "pin-code-container",
          compName: "PinCode",
        },
        {
          id: 3,
          name: "Questions Expanding",
          class: "questions-container",
          compName: "Questions",
        },
        {
          id: 4,
          name: "Rock, Paper, Scissors",
          class: "morra-container",
          compName: "Morra",
        },
        {
          id: 5,
          name: "Custom Modal",
          class: "modal-container",
          compName: "Modal",
        },
        {
          id: 6,
          name: "Calendar Viewer",
          class: "calendar-container",
          compName: "Calendar",
        },
        {
          id: 7,
          name: "Youtube Gallery",
          class: "youtube-container",
          compName: "Youtube",
        },
        {
          id: 8,
          name: "Star Rating",
          class: "star-rating-container",
          compName: "StarRating",
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
