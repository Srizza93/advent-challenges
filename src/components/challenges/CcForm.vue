<template>
  <div class="cc-form-container">
    <form class="form-container">
      <div class="cc-card-img-container">
        <div class="cc-card-img-subcontainer">
          <div class="cc-front-outer">
            <div class="cc-front-outer_cc-front-inner">
              <img
                class="cc-card-img"
                :src="getImgUrl(`${currentCard}--front`)"
                :alt="currentCard"
              />
              <span
                class="cc-front-outer_cc-front-inner_cc-number cc-front-details"
                >4242 4242 4242 4242</span
              >
              <span
                class="cc-front-outer_cc-front-inner_cc-expiration cc-front-details"
                >01/2032</span
              >
              <span
                class="cc-front-outer_cc-front-inner_cc-name cc-front-details"
                >JOHN DOE</span
              >
            </div>
          </div>
          <div class="cc-back-outer">
            <div class="cc-back-outer_cc-back-inner">
              <img
                class="cc-card-img"
                :src="getImgUrl(`${currentCard}--back`)"
                :alt="currentCard"
              />
              <span class="cc-back-outer_cc-back-inner_cc-signature"
                >John Doe</span
              >
              <span class="cc-back-outer_cc-back-inner_cc-cvc">123</span>
            </div>
          </div>
        </div>
      </div>
      <div class="inputs-container">
        <div class="inputs-container_input-container">
          <label>Card Number</label>
          <input
            class="inputs-container_input-container_input"
            type="text"
            id="ccnumber"
            @focusout="changeCCImage"
          />
        </div>
        <div class="inputs-container_input-container">
          <label>Card Holder</label>
          <input
            class="inputs-container_input-container_input"
            type="text"
            id="ccholder"
          />
        </div>
      </div>
      <div class="inputs-container">
        <div
          class="inputs-container_expiration-container inputs-container_input-container"
        >
          <label>Expiration Date</label>
          <div class="inputs-container_expiration-container_options">
            <select class="inputs-container_input-container_input">
              <option
                v-for="(month, index) in months"
                :key="index + month"
                :value="month"
              >
                {{ month }}
              </option>
            </select>
            <select class="inputs-container_input-container_input">
              <option
                v-for="(year, index) in years"
                :key="index + year"
                :value="year"
              >
                {{ year }}
              </option>
            </select>
          </div>
        </div>
        <div class="inputs-container_input-container">
          <label>CVV</label>
          <input
            class="inputs-container_input-container_input"
            type="number"
            id="cvv"
            min="0"
            max="999"
            @focus="flipCard"
            @focusout="flipCard"
          />
        </div>
      </div>
      <input class="submit-button" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CcForm",
  data() {
    return {
      cards: ["american", "discover", "master", "visa"],
      currentCard: "american",
    };
  },
  computed: {
    months() {
      const monthsNumbers = [...Array(12)].map((number, index) =>
        (index + 1 + "").padStart(2, "0")
      );
      monthsNumbers.unshift("Month");
      return monthsNumbers;
    },
    years() {
      const date = new Date().getFullYear();
      const yearsList = [...Array(20)].map(
        (number, index) => date + index + ""
      );
      yearsList.unshift("Year");
      return yearsList;
    },
  },
  methods: {
    getImgUrl(card) {
      const assets = require.context("../../assets", false, /\.png$/);
      return assets("./cc__" + card + ".png");
    },
    changeCCImage(event) {
      const input = event.target.value;
      if (input[0] === "3") {
        this.currentCard = "american";
      }
      if (input[0] === "4") {
        this.currentCard = "visa";
      }
      if (input[0] === "5") {
        this.currentCard = "mastercard";
      }
      if (input[0] === "6") {
        this.currentCard = "discover";
      }
    },
    flipCard() {
      const cardContainer = document.querySelector(".cc-card-img-subcontainer");
      cardContainer.classList.toggle("cc-flip");
    },
  },
};
</script>

<style scoped>
.cc-form-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-top: 220px !important;
}
.form-container {
  display: flex;
  flex-direction: column;
  padding: 150px 40px 40px 40px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.cc-card-img-container {
  position: absolute;
  left: calc(50% - 200px);
  top: -100px;
  width: min-content;
  height: 245px;
  background-color: transparent;
  perspective: 1000px;
}
.cc-card-img-subcontainer {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.cc-card-img {
  width: 400px;
  height: auto;
}
.cc-front-outer,
.cc-back-outer {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.cc-back-outer {
  background-color: transparent;
  transform: rotateY(180deg);
}
.cc-front-outer_cc-front-inner,
.cc-back-outer_cc-back-inner {
  position: relative;
}
.cc-front-details {
  position: absolute;
  font-weight: bold;
  background: linear-gradient(
    180deg,
    #ffffff 15.34%,
    #dbdbdb 21.24%,
    #ffffff 37.13%,
    rgba(188, 203, 217, 0.68) 48.94%,
    rgba(255, 255, 255, 0.830204) 58.93%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}
.cc-front-outer_cc-front-inner_cc-number {
  top: 115px;
  left: 70px;
  font-size: 22px;
}
.cc-front-outer_cc-front-inner_cc-expiration {
  top: 145px;
  left: 215px;
  font-size: 14px;
}
.cc-front-outer_cc-front-inner_cc-name {
  top: 170px;
  left: 70px;
  font-size: 14px;
}
.cc-back-outer_cc-back-inner_cc-signature {
  position: absolute;
  top: 85px;
  left: 70px;
  font-size: 26px;
  font-family: "Beth Ellen", cursive;
}
.cc-back-outer_cc-back-inner_cc-cvc {
  position: absolute;
  top: 100px;
  left: 300px;
  font-size: 14px;
}
.cc-flip {
  transform: rotateY(180deg);
}
.inputs-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.inputs-container_input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
}
.inputs-container_expiration-container_options {
  display: flex;
  flex-direction: row;
}
.inputs-container_input-container_input {
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #a7a7a7;
  background: url(../../assets/arrow.svg) 95% center no-repeat;
  appearance: none;
}
.inputs-container_input-container_input:first-child {
  margin-right: 10px;
}
.submit-button {
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  background-color: #7d193e;
  color: white;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .inputs-container {
    flex-direction: column;
  }
}
@media screen and (max-width: 400px) {
  .cc-card-img-container {
    left: calc(50% - 100px);
    top: -50px;
  }
  .cc-card-img {
    width: 200px;
    height: auto;
  }
  .cc-front-details {
    font-size: 11px;
  }
  .cc-front-outer_cc-front-inner_cc-number {
    top: 60px;
    left: 35px;
  }
  .cc-front-outer_cc-front-inner_cc-expiration {
    top: 74px;
    left: 107px;
  }
  .cc-front-outer_cc-front-inner_cc-name {
    top: 90px;
    left: 35px;
    font-size: 7px;
  }
}
</style>
