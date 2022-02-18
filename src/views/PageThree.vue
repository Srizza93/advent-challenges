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
  name: "PageThree",
  components: {
    Gallery,
    MenuWindow,
  },
  data() {
    return {
      mChallenges: [
        {
          id: 1,
          name: "Table of Contents",
          class: "table-contents-container",
          compName: "TableContents",
        },
        {
          id: 2,
          name: "Password Generator",
          class: "password-container",
          compName: "Password",
        },
        {
          id: 3,
          name: "Signup Validation",
          class: "signup-container",
          compName: "Signup",
        },
        {
          id: 4,
          name: "Tabbed Content",
          class: "tabbed-content-container",
          compName: "TabbedContent",
        },
        {
          id: 5,
          name: "Simplified Budget",
          class: "simplified-budget-container",
          compName: "SimplifiedBudget",
        },
        {
          id: 6,
          name: "Credit Card Form",
          class: "cc-form-container",
          compName: "CcForm",
        },
        {
          id: 7,
          name: "Toaster",
          class: "toaster-container",
          compName: "Toaster",
        },
        {
          id: 8,
          name: "Dynamic Table with Pagination",
          class: "pagination-container",
          compName: "Pagination",
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
