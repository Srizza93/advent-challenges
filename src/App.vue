<template>
  <div class="main-container">
    <navigation-bar />
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/Navigation.vue";

export default {
  name: "App",
  components: { NavigationBar },
};
</script>
