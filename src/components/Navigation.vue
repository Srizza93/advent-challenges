<template>
  <div class="navigation-container">
    <div
      class="navigation-container_link-container"
      v-for="button in buttons"
      :key="button.id"
    >
      <router-link
        class="navigation-container_link-container_link"
        :to="button.path"
        >{{ button.id
        }}<span v-if="button.id < buttons.length">,</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      buttons: [
        {
          id: 1,
          path: "/",
        },
        {
          id: 2,
          path: "/PageTwo",
        },
        {
          id: 3,
          path: "/PageThree",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navigation-container {
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 10px;
  margin: 0 auto;
  border-radius: 0 0 25px 25px;
  background-color: white;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
    rgb(0 0 0 / 30%) 0px 8px 16px -8px;
}
.navigation-container_link-container {
  margin: 20px 5px;
}
.navigation-container_link-container_link {
  color: #0071c2;
  font-size: 26px;
  text-decoration: none;
}
.navigation-container_link-container_link:hover {
  text-decoration: underline;
}
</style>
