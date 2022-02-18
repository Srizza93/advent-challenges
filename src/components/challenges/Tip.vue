<template>
  <div class="tip-container">
    <div class="result-container">
      <span>Tip Amount</span>
      <span class="result-container_result">${{ tipAmount }}</span>
    </div>
    <div class="result-container">
      <span>Total Per Person</span>
      <span class="result-container_result">${{ totPerPerson }}</span>
    </div>
    <div class="input-container">
      <div class="input-container_containers">
        <div class="input-container_containers_amounts">
          <img class="input-container_containers_amounts_img" />
          <input
            class="input-container_containers_amounts_input"
            v-model="billAmount"
          />
        </div>
        <span>Bill Amount</span>
      </div>
      <div class="input-container_containers">
        <div class="input-container_containers_amounts">
          <img class="input-container_containers_amounts_img" />
          <input
            class="input-container_containers_amounts_input"
            v-model="persons"
          />
        </div>
        <span>Number Of People</span>
      </div>
    </div>
    <div class="percentages-container">
      <div
        class="percentages-container_percentage"
        v-for="item in percentages"
        :key="item.id + item.percentage"
      >
        <input
          class="percentages-container_percentage_input"
          type="radio"
          name="tip"
          :id="item.value"
          :value="item.percentage"
          v-model="percentage"
          :checked="item.percentage == value"
        />
        <label
          class="percentages-container_percentage_label"
          :for="item.value"
          >{{ item.percentage }}</label
        >
      </div>
    </div>
    <div class="button-container">
      <button class="button-container_button" @click="calculate()">
        Calculate
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tip",
  props: {
    value: "15%",
  },
  data() {
    return {
      billAmount: 102.02,
      persons: 3,
      percentage: "15%",
      tipAmount: "15.30",
      totPerPerson: "39.11",
      percentages: [
        {
          id: 1,
          value: "five-percent",
          percentage: "5%",
        },
        {
          id: 2,
          value: "ten-percent",
          percentage: "10%",
        },
        {
          id: 3,
          value: "fifteen-percent",
          percentage: "15%",
        },
        {
          id: 4,
          value: "twenty-percent",
          percentage: "20%",
        },
      ],
    };
  },
  methods: {
    calculate() {
      this.tipAmount = (
        (Number(this.billAmount) *
          Number(this.percentage.substring(0, this.percentage.indexOf("%")))) /
        100
      ).toFixed(2);
      this.totPerPerson = (
        (Number(this.billAmount) + Number(this.tipAmount)) /
        Number(this.persons)
      ).toFixed(2);
    },
  },
};
</script>

<style scoped>
.tip-container {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  border-radius: 25px;
  background-color: white;
  color: #333;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  font-family: Arial, Helvetica, sans-serif;
}
.result-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px;
}
.result-container:first-child {
  border-bottom: 2px solid #dedede;
}
.result-container_result {
  margin: 20px;
  font-size: 80px;
  font-weight: bold;
}
.input-container {
  display: flex;
  flex-direction: row;
}
.input-container_containers:first-child {
  border-right: 2px solid #dedede;
}
.input-container_containers {
  padding: 65px 45px 45px;
  text-align: center;
  background-color: #f7f7f7;
}
.input-container_containers_amounts {
  border-bottom: 2px dotted gray;
}
.input-container_containers_amounts_input {
  width: 100%;
  font-size: 60px;
  font-weight: bold;
  background-color: inherit;
  border: none;
  text-align: center;
  outline: none;
}
.percentages-container {
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
}
.percentages-container_percentage {
  width: 25%;
  margin: 25px;
}
.percentages-container_percentage_input {
  display: none;
}
.percentages-container_percentage_label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 25px;
  color: #60c1b6;
  background-color: white;
  font-size: 25px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
}
.percentages-container_percentage_input:checked + label {
  color: white;
  background-color: #60c1b6;
}
.button-container {
  display: flex;
  justify-content: end;
}
.button-container_button {
  width: 200px;
  padding: 25px;
  margin: 25px;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #ed7861;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .tip-container {
    max-width: 400px;
  }
  .result-container_result {
    font-size: 40px;
  }
  .input-container_containers_amounts_input {
    font-size: 30px;
  }
  .percentages-container_percentage {
    margin: 15px;
  }
  .percentages-container_percentage_label {
    padding: 15px;
    font-size: 16px;
  }
}
</style>
