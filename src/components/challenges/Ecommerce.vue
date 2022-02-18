<template>
  <div class="e-commerce-container">
    <menu-list @addItemToCart="updateCart" />
    <cart-comp :products="cart" />
  </div>
</template>

<script>
import MenuList from "./sub-components/MenuList.vue";
import CartComp from "./sub-components/CartComp.vue";

export default {
  name: "Ecommerce",
  components: { MenuList, CartComp },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(product) {
      this.cart.push(product);
    },
  },
};
</script>

<style scoped>
.e-commerce-container {
  display: flex;
  flex-direction: row;
  width: 700px;
  background-color: white;
}
.container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  height: 450px;
}
.container_cart {
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: white;
  margin: 20px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

@media screen and (max-width: 800px) {
  .e-commerce-container {
    flex-direction: column;
    width: 320px;
  }
  .container {
    width: auto;
    justify-content: center;
  }
}
</style>
