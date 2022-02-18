<template>
  <div class="app-container">
    <component
      class="component"
      v-for="component in gcomps"
      :key="component"
      :is="component"
    />
  </div>
</template>

<script>
import Ecommerce from "./challenges/Ecommerce.vue";
import Piano from "./challenges/Piano.vue";
import CompressedFM from "./challenges/CompressedFM.vue";
import RangeSlider from "./challenges/RangeSlider.vue";
import Keyboard from "./challenges/Keyboard.vue";
import Tip from "./challenges/Tip.vue";
import Timer from "./challenges/Timer.vue";
import Weather from "./challenges/Weather.vue";
import Carousel from "./challenges/Carousel.vue";
import PinCode from "./challenges/PinCode.vue";
import Questions from "./challenges/Questions.vue";
import Morra from "./challenges/Morra.vue";
import Modal from "./challenges/Modal.vue";
import Calendar from "./challenges/Calendar.vue";
import Youtube from "./challenges/Youtube.vue";
import StarRating from "./challenges/StarRating.vue";
import TableContents from "./challenges/TableContents.vue";
import Password from "./challenges/Password.vue";
import Signup from "./challenges/Signup.vue";
import TabbedContent from "./challenges/TabbedContent.vue";
import SimplifiedBudget from "./challenges/SimplifiedBudget.vue";
import CcForm from "./challenges/CcForm.vue";
import Toaster from "./challenges/Toaster.vue";
import Pagination from "./challenges/Pagination.vue";

export default {
  name: "Gallery",
  components: {
    Ecommerce,
    Piano,
    CompressedFM,
    RangeSlider,
    Keyboard,
    Tip,
    Timer,
    Weather,
    Carousel,
    PinCode,
    Questions,
    Morra,
    Modal,
    Calendar,
    Youtube,
    StarRating,
    TableContents,
    Password,
    Signup,
    TabbedContent,
    SimplifiedBudget,
    CcForm,
    Toaster,
    Pagination,
  },
  props: {
    gcomps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.component {
  margin: 75px;
}
@media screen and (max-width: 800px) {
  .component {
    margin: 75px 10px;
  }
}
</style>
