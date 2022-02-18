<template>
  <div
    class="container cart-container"
    :style="{
      'background-image': `url(${cover})`,
    }"
  >
    <div class="container_cart container_cart-cart">
      <h1>Your Cart</h1>
      <h3 v-if="cartIsEmpty()">Your cart is empty</h3>
      <ul v-else class="cart-summary">
        <li
          class="cart-summary_item"
          v-for="product in products"
          :key="product.id"
        >
          <div class="plate">
            <img
              :src="getImgUrl(product.path)"
              alt="Fish Sticks and Fries"
              class="plate_img"
            />
            <div class="quantity">
              <span>{{ product.quantity }}</span>
            </div>
          </div>
          <div class="content">
            <p class="menu-item">{{ product.name }}</p>
            <p class="price">${{ product.price.toFixed(2) }}</p>
          </div>
          <div class="quantity__wrapper">
            <button
              class="decrease quantity_button"
              @click="changeQuantity($event, product)"
            >
              <chevron class="chevron" />
            </button>
            <div class="quantity__wrapper_quantity">{{ product.quantity }}</div>
            <button
              class="increase quantity_button"
              @click="changeQuantity($event, product)"
            >
              <chevron class="chevron" />
            </button>
            <div class="price subtotal">${{ product.total }}</div>
          </div>
          <button
            class="delete-button"
            v-if="product.quantity === 0"
            @click="deleteItem(product)"
          >
            Delete Item
          </button>
        </li>
        <li>
          <div class="totals">
            <div class="line-item">
              <div class="label">Subtotal:</div>
              <div class="amount price subtotal">${{ getSubtotal() }}</div>
            </div>
            <div class="line-item">
              <div class="label">Tax:</div>
              <div class="amount price tax">${{ getTax() }}</div>
            </div>
            <div class="line-item">
              <div class="label">Total:</div>
              <div class="amount price total">${{ getTotal() }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import chevron from "../../../assets/chevron.svg";

export default {
  name: "CartComp",
  components: { chevron },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cover:
        "https://srizza93.github.io/advent-challenges/src/assets/bg__top-right.svg",
    };
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context("../../../assets", false, /\.png|svg$/);
      return images("./" + pic);
    },
    cartIsEmpty() {
      return this.$props.products.length <= 0;
    },
    changeQuantity(event, product) {
      const ops = event.target.closest("button").classList;
      if (ops.contains("decrease") && product.quantity === 0) {
        return;
      }
      ops.contains("increase") ? product.quantity++ : product.quantity--;
      product.total = (product.quantity * product.price).toFixed(2);
    },
    deleteItem(product) {
      const index = this.$props.products.indexOf(product);
      this.$props.products.splice(index, 1);
    },
    getSubtotal() {
      return Number(
        Array.from(this.$props.products)
          .reduce((prev, curr) => {
            return prev + Number(curr.total);
          }, 0)
          .toFixed(2)
      );
    },
    getTax() {
      return (this.getSubtotal() * 0.07).toFixed(2);
    },
    getTotal() {
      return (this.getSubtotal() + this.getSubtotal() * 0.07).toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-container {
  justify-content: flex-start;
  background-repeat: no-repeat;
}
.container_cart-cart {
  padding: 0 20px;
}
.cart-summary {
  height: 350px;
  padding: 0;
  overflow: auto;
}
.cart-summary_item {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 0 20px 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
}
.plate {
  margin-left: 80px;
}
.plate_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  left: 27px;
  width: 30px;
  height: 30px;
  padding: 15px;
  border-radius: 50%;
  color: white;
  background-color: black;
}
.content {
  margin-left: 80px;
}
.quantity__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 80px;
}
.quantity__wrapper_quantity {
  margin: 0 10px;
}
.quantity_button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: #6b00ea;
  cursor: pointer;
}
.quantity_button:hover {
  background-color: black;
}
.increase {
  transform: rotate(180deg);
}
.delete-button {
  width: 150px;
  height: 25px;
  margin: 20px 0 0 80px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border-radius: 20px;
  background-color: #6b00ea;
  cursor: pointer;
}
.delete-button:hover {
  background-color: black;
}
.subtotal {
  margin-left: auto;
}
.price {
  margin-top: 0;
  font-weight: 600;
}
.menu-item {
  margin: 0;
  font-size: 20px;
}
.totals {
  text-align: end;
}
.line-item {
  margin: 10px 0;
}
.subtotal,
.amount {
  font-size: 32px;
}
.total {
  color: #6b00ea;
}
.chevron {
  fill: white;
  padding: 3px;
}
@media screen and (max-width: 800px) {
  .container_cart-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
