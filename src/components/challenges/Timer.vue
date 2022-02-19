<template>
  <div class="timer-container" v-bind:class="{ active_timer: timerOn }">
    <div class="timer-container_time">
      <span class="timer-container_time_value">{{ minutes }}</span>
      <span class="timer-container_time_colons">:</span>
      <span class="timer-container_time_value">{{ seconds }}</span>
    </div>
    <button
      class="timer-container_button"
      v-if="!timerOn"
      @click="convertTimesIntoSeconds"
    >
      Start
    </button>
    <button class="timer-container_button" v-else @click="stopTime">
      Stop
    </button>
    <img
      class="timer-container_gear"
      :src="getImgUrl(gear)"
      alt="gear"
      @click="toggleSet"
    />
    <div class="timer-container_set-time-container">
      <input
        class="timer-container_set-time-container_value"
        type="text"
        placeholder="mm"
        v-model="setMinutes"
      />
      <span>:</span>
      <input
        class="timer-container_set-time-container_value"
        type="text"
        placeholder="ss"
        v-model="setSeconds"
      />
    </div>
    <div
      class="timer-container_hand"
      v-bind:class="{ active_hand: timerOn }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      gear: "gear.png",
      timerOn: false,
      timer: undefined,
      rawSeconds: 0,
      setMinutes: 0,
      setSeconds: 0,
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.png$/);
      return assets("./" + pic);
    },
    toggleSet() {
      document
        .querySelector(".timer-container_set-time-container")
        .classList.toggle("show-set-time");
    },
    convertTimesIntoSeconds() {
      this.rawSeconds = Number(this.setMinutes) * 60 + Number(this.setSeconds);
      this.timerOn = true;
      this.timer = setInterval(this.startCountdown.bind(this), 1000);
    },
    startCountdown() {
      if (this.rawSeconds > 0) {
        this.rawSeconds -= 1;
        this.moveHand();
      } else {
        this.stopTime();
      }
    },
    stopTime() {
      clearInterval(this.timer);
      this.timerOn = false;
    },
    moveHand() {
      document.querySelector(
        ".timer-container_hand"
      ).style.transform = `rotateZ(-${6 * Number(this.seconds)}deg)`;
    },
  },
  computed: {
    seconds() {
      return String(this.rawSeconds - this.minutes * 60).padStart(2, "0");
    },
    minutes() {
      return String(Math.floor(this.rawSeconds / 60)).padStart(2, "0");
    },
  },
};
</script>

<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid black;
  border-radius: 50%;
  background: url("../../assets/clock-backg.jpeg") center no-repeat;
  background-size: cover;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
}
.timer-container_time {
  margin: 50px 0 10px 0;
  font-size: 40px;
}
.timer-container_button {
  padding: 5px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: red;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
  cursor: pointer;
}
.timer-container_gear {
  width: 35px;
  height: 35px;
  margin: 50px 0 0 0;
  cursor: pointer;
}
.timer-container_gear:hover {
  opacity: 0.7;
}
.timer-container_set-time-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  visibility: hidden;
  margin-bottom: auto;
  width: 100px;
}
.timer-container_set-time-container_value {
  width: 40px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 25px;
  text-align: center;
}
.show-set-time {
  visibility: visible;
}
.active_timer {
  box-shadow: rgb(220 20 60 / 25%) 0px 54px 55px,
    rgb(220 20 60 / 12%) 0px -12px 30px, rgb(220 20 60 / 12%) 0px 4px 6px,
    rgb(220 20 60 / 17%) 0px 12px 13px, rgb(220 20 60 / 9%) 0px -3px 5px;
}
.timer-container_hand {
  display: none;
  position: absolute;
  bottom: 50%;
  left: calc(50% - 2px);
  width: 6px;
  height: 149px;
  background-color: rgba(220, 20, 60);
  border-radius: 10px;
  transform-origin: bottom;
}
.active_hand {
  display: block;
}

@media screen and (max-width: 400px) {
  .timer-container {
    width: 265px;
    height: 265px;
  }
  .timer-container_gear {
    margin-top: 10px;
  }
  .timer-container_time {
    margin-bottom: 15px;
  }
}
</style>
