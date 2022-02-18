<template>
  <div class="range-container">
    <div class="range-slider">
      <span class="range-slider_amount">${{ inputValue }}</span>
      <input
        class="range-slider_slider"
        type="range"
        min="0"
        max="100"
        step="0.01"
        v-model="value"
      />
      <button class="range-slider_button">BUY NOW</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  data() {
    return {
      value: 50,
    };
  },
  computed: {
    inputValue() {
      return Number(this.value).toFixed(2);
    },
  },
};
</script>

<style scoped>
.range-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262529;
  font-family: Arial, Helvetica, sans-serif;
}
.range-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background-color: #262529;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
.range-slider_amount {
  font-size: 90px;
  font-weight: 600;
  color: rgb(252, 227, 8);
}
.range-slider_slider {
  width: 500px;
  height: 15px;
  margin: 80px;
  background: #4d4c53;
  border-radius: 25px;
  -webkit-appearance: none;
  appearance: none;
}
.range-slider_slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(129, 11, 11);
  outline: 15px solid rgb(129, 11, 11, 0.3);
  cursor: pointer;
}
.range-slider_slider::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(129, 11, 11);
  outline: 15px solid rgb(129, 11, 11, 0.3);
  cursor: pointer;
}
.range-slider_button {
  padding: 20px;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #333139;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .range-slider {
    padding: 30px;
  }
  .range-slider_amount {
    font-size: 40px;
  }
  .range-slider_slider {
    width: 250px;
    height: 10px;
    margin: 60px 40px;
  }
  .range-slider_slider::-webkit-slider-thumb {
    width: 25px;
    height: 25px;
  }
  .range-slider_button {
    font-size: 20px;
  }
}
</style>
