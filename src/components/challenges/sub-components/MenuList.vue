<template>
  <div
    class="container menu-container"
    :style="{ 'background-image': 'url(../../../assets/bg__left.svg)' }"
  >
    <div class="container_cart container_cart-menu">
      <h1>To Go Menu</h1>
      <ul class="container_cart_list">
        <li
          class="container_cart_list_item"
          v-for="plate in menu"
          :key="plate.id"
        >
          <div class="plate">
            <img
              class="plate_img"
              :src="getImgUrl(plate.path)"
              :alt="plate.name"
            />
          </div>
          <div class="content">
            <span>{{ plate.name }}</span>
            <span class="content_price">${{ plate.price.toFixed(2) }}</span>
            <button class="content_button" @click="addToCart(plate)">
              <span v-if="plate.quantity <= 0">Add to Cart</span>
              <div class="content_button_in-cart" v-else>
                <check />
                <span class="content_button_in-cart_text">In Cart</span>
              </div>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import check from "../../../assets/check.svg";

export default {
  name: "MenuList",
  components: { check },
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Bacon, Eggs and Toast",
          path: "plate__bacon-eggs.png",
          price: 5.99,
          quantity: 0,
          total: 0,
          purchased: false,
        },
        {
          id: 2,
          name: "Chicken Salad with Parmesan",
          path: "plate__chicken-salad.png",
          price: 6.98,
          quantity: 0,
          total: 0,
          purchased: false,
        },
        {
          id: 3,
          name: "Fish Sticks and Fries",
          path: "plate__fish-sticks-fries.png",
          price: 6.34,
          quantity: 0,
          total: 0,
          purchased: false,
        },
        {
          id: 4,
          name: "French Fries with Ketchup",
          path: "plate__french-fries.png",
          price: 2.23,
          quantity: 0,
          total: 0,
          purchased: false,
        },
        {
          id: 5,
          name: "Ravioli",
          path: "plate__ravioli.png",
          price: 5.45,
          quantity: 0,
          total: 0,
          purchased: false,
        },
        {
          id: 6,
          name: "Salmon and Vegetables",
          path: "plate__salmon-vegetables.png",
          price: 5.12,
          quantity: 0,
          total: 0,
          purchased: false,
        },
        {
          id: 7,
          name: "Spaghetti with Meat Sauce",
          path: "plate__spaghetti-meat-sauce.png",
          price: 7.82,
          quantity: 0,
          total: 0,
          purchased: false,
        },
        {
          id: 8,
          name: "Tortellini",
          path: "plate__tortellini.png",
          price: 6.8,
          quantity: 0,
          total: 0,
          purchased: false,
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context("../../../assets", false, /\.png|svg$/);
      return images("./" + pic);
    },
    addToCart(plate) {
      if (plate.quantity > 0) {
        return;
      }
      plate.quantity += 1;
      plate.total = plate.quantity * plate.price;
      plate.purchased = true;
      this.$emit("addItemToCart", plate);
    },
  },
};
</script>

<style scoped>
.menu-container {
  justify-content: flex-end;
  background-repeat: no-repeat;
}
.container_cart-menu {
  padding: 0 20px;
}
.container_cart_list {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  padding: 0;
  overflow-y: auto;
}
.container_cart_list_item {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 90%;
  height: 150px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px 0 0 10px;
  background-color: rgb(43, 187, 24, 0.3);
}
.plate_img {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 150px;
  height: 150px;
}
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 0;
  margin-left: 140px;
  height: 120px;
}
.content_price {
  font-size: 32px;
  font-weight: 600;
  margin-top: 10px;
}
.content_button {
  position: absolute;
  bottom: -20px;
  width: 100px;
  padding: 5px;
  border-radius: 20px;
  color: white;
  background-color: black;
  cursor: pointer;
}
.content_button_in-cart {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.content_button_in-cart_text {
  margin-left: 5px;
}

@media screen and (max-width: 800px) {
  .content {
    margin-left: 80px;
  }
  .plate_img {
    width: 100px;
    height: 100px;
  }
  .container_cart-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
