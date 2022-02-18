<template>
  <div class="piano-container">
    <div class="piano">
      <div
        class="piano_set_key white"
        v-for="n in 14"
        :key="n"
        @click="playSound"
      >
        <div
          class="piano_set_key black"
          v-if="isAContainer(n)"
          @click="playSound"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Piano",
  data() {
    return {
      blackContainers: [2, 3, 5, 6, 7, 9, 10, 12, 13, 14],
    };
  },
  methods: {
    isAContainer(key) {
      return this.blackContainers.includes(key);
    },
    addIndexToKeys() {
      const keys = document.querySelectorAll(".piano_set_key");
      keys.forEach((key, index) => key.setAttribute("id", index + 1));
    },
    playSound(event) {
      const audio = document.createElement("audio");
      document.body.appendChild(audio);
      audio.setAttribute("type", "audio/mp3");
      audio.setAttribute("src", this.getSoundUrl(`key-${event.target.id}`));
      audio.play();
      setTimeout(function () {
        audio.remove();
      }, 5000);
    },
    getSoundUrl(key) {
      const sounds = require.context("../../assets", false, /\.mp3$/);
      return sounds("./" + key + ".mp3");
    },
  },
  mounted() {
    this.addIndexToKeys();
  },
};
</script>

<style scoped>
.piano-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.piano {
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 600px;
  height: 200px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
}

.piano_set {
  display: flex;
  justify-content: center;
  width: 50%;
}

.piano_set_key {
  cursor: pointer;
  color: white;
}

.white {
  position: relative;
  width: 42.85px;
  border-radius: 0 0 10px 10px;
  background-color: white;
}

.white:hover {
  background-color: #ffd200;
}

.black {
  position: absolute;
  top: 0;
  left: -15px;
  width: 25px;
  height: 110px;
  border-radius: 0 0 5px 5px;
  background-color: black;
}

.black:hover {
  background-color: #f40082;
}

@media screen and (max-width: 650px) {
  .piano {
    flex-direction: column-reverse;
    height: 600px;
    width: 200px;
  }
  .white {
    width: 100%;
    height: 42.85px;
    border-radius: 0 10px 10px 0;
  }
  .black {
    left: 0;
    top: 25px;
    height: 25px;
    width: 110px;
    border-radius: 0 5px 5px 0;
  }
}
</style>
