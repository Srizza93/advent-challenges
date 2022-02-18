<template>
  <div class="keyboard-container">
    <div class="keyboard">
      <div class="keyboard_row" v-for="row in keys" :key="row.id + row.name">
        <button
          class="keyboard_row_key"
          v-for="kbutton in row.list"
          :key="kbutton.id + kbutton.key"
          :name="kbutton.key"
        >
          <span class="keyboard_row_key_text" v-if="!kbutton.template">
            {{ kbutton.text }}
          </span>
          <span
            class="keyboard_row_key_text"
            v-else
            v-html="kbutton.template"
          ></span>
        </button>
      </div>
      <h1 class="game-over">Game Over</h1>
      <h1 class="you-win">You Win!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  data() {
    return {
      keys: [
        {
          id: 1,
          name: "row1",
          list: [
            {
              id: 1,
              text: "º",
              key: "º",
            },
            {
              id: 2,
              text: "1",
              key: "1",
            },
            {
              id: 3,
              text: "2",
              key: "2",
            },
            {
              id: 4,
              text: "3",
              key: "3",
            },
            {
              id: 5,
              text: "4",
              key: "4",
            },
            {
              id: 6,
              text: "5",
              key: "5",
            },
            {
              id: 7,
              text: "6",
              key: "6",
            },
            {
              id: 8,
              text: "7",
              key: "7",
            },
            {
              id: 9,
              text: "8",
              key: "8",
            },
            {
              id: 10,
              text: "9",
              key: "9",
            },
            {
              id: 11,
              text: "0",
              key: "0",
            },
            {
              id: 12,
              text: "?",
              key: "'",
            },
            {
              id: 13,
              text: "¿",
              key: "¡",
            },
            {
              id: 14,
              text: "backspace",
              template: `<span>&larr;</span>`,
              key: "backspace",
            },
          ],
        },
        {
          id: 2,
          name: "row2",
          list: [
            {
              id: 1,
              text: "Tab",
              template: `<span>&rarr;</span>`,
              key: "tab",
            },
            {
              id: 2,
              text: "Q",
              key: "q",
            },
            {
              id: 3,
              text: "W",
              key: "w",
            },
            {
              id: 4,
              text: "E",
              key: "e",
            },
            {
              id: 5,
              text: "R",
              key: "r",
            },
            {
              id: 6,
              text: "T",
              key: "t",
            },
            {
              id: 7,
              text: "Y",
              key: "y",
            },
            {
              id: 8,
              text: "U",
              key: "u",
            },
            {
              id: 9,
              text: "I",
              key: "i",
            },
            {
              id: 10,
              text: "O",
              key: "o",
            },
            {
              id: 11,
              text: "P",
              key: "p",
            },
            {
              id: 12,
              text: "^",
              key: "dead",
            },
            {
              id: 13,
              text: "*",
              key: "+",
            },
            {
              id: 14,
              text: "Enter",
              template: `<span>&larr;</span>`,
              key: "enter",
            },
          ],
        },
        {
          id: 3,
          name: "row3",
          list: [
            {
              id: 1,
              text: "Capslock",
              template: `<span>&uarr;</span>`,
              key: "capslock",
            },
            {
              id: 2,
              text: "A",
              key: "a",
            },
            {
              id: 3,
              text: "S",
              key: "s",
            },
            {
              id: 4,
              text: "D",
              key: "d",
            },
            {
              id: 5,
              text: "F",
              key: "f",
            },
            {
              id: 6,
              text: "G",
              key: "g",
            },
            {
              id: 7,
              text: "H",
              key: "h",
            },
            {
              id: 8,
              text: "J",
              key: "j",
            },
            {
              id: 9,
              text: "K",
              key: "k",
            },
            {
              id: 10,
              text: "L",
              key: "l",
            },
            {
              id: 11,
              text: "Ñ",
              key: "ñ",
            },
            {
              id: 12,
              text: "{",
              key: "dead",
            },
            {
              id: 13,
              text: "ç",
              key: "ç",
            },
          ],
        },
        {
          id: 4,
          name: "row4",
          list: [
            {
              id: 1,
              text: "Shift",
              template: `<span>&uarr;</span>`,
              key: "shift",
            },
            {
              id: 2,
              text: "<>",
              key: "<",
            },
            {
              id: 3,
              text: "Z",
              key: "z",
            },
            {
              id: 4,
              text: "X",
              key: "x",
            },
            {
              id: 5,
              text: "C",
              key: "c",
            },
            {
              id: 6,
              text: "V",
              key: "v",
            },
            {
              id: 7,
              text: "B",
              key: "b",
            },
            {
              id: 8,
              text: "N",
              key: "n",
            },
            {
              id: 9,
              text: "M",
              key: "m",
            },
            {
              id: 10,
              text: ";",
              key: ",",
            },
            {
              id: 11,
              text: ".",
              key: ".",
            },
            {
              id: 12,
              text: "-",
              key: "-",
            },
            {
              id: 13,
              text: "Shift",
              template: `<span>&uarr;</span>`,
              key: "shift",
            },
          ],
        },
        {
          id: 5,
          name: "row5",
          list: [
            {
              id: 1,
              text: "ctrl",
              key: "control",
            },
            {
              id: 2,
              text: "alt",
              key: "alt",
            },
            {
              id: 3,
              text: "cmd",
              key: "meta",
            },
            {
              id: 4,
              text: "",
              key: " ",
            },
            {
              id: 5,
              text: "cmd",
              key: "meta",
            },
            {
              id: 6,
              text: "alt",
              key: "alt",
            },
          ],
        },
      ],
    };
  },
  methods: {
    jiggleKeys() {
      const keys = Array.from(
        document.querySelectorAll(".keyboard_row_key")
      ).filter((key) => !key.classList.contains("highlighted"));
      if (!keys.length) {
        this.gameWon();
        this.endGame();
        this.jiggleKeys();
        return;
      }
      const jiggling = keys[Math.floor(Math.random() * keys.length)];
      jiggling.classList.add("jiggling");
    },
    matchPressedButtons(event) {
      const jiggling = document.querySelector(".jiggling");
      const key = event.key.toLowerCase();
      if (jiggling.attributes && key === jiggling.attributes.name.value) {
        this.highligthPressedButton(key, jiggling);
        this.jiggleKeys();
      } else {
        this.gameLost();
        this.endGame();
      }
    },
    highligthPressedButton(key, jiggling) {
      jiggling.classList.remove("jiggling");
      document
        .querySelectorAll(`[name="${key}"]`)
        .forEach((element) => element.classList.add("highlighted"));
    },
    endGame() {
      document
        .querySelectorAll(".highlighted")
        .forEach((element) => element.classList.remove("highlighted"));
    },
    gameWon() {
      const gamewon = document.querySelector(".you-win").classList;
      gamewon.add("show-win");
      setInterval(() => {
        gamewon.remove("show-win");
      }, 3000);
    },
    gameLost() {
      const gameover = document.querySelector(".game-over").classList;
      gameover.add("show-lost");
      setInterval(() => {
        gameover.remove("show-lost");
      }, 3000);
    },
  },
  mounted() {
    this.jiggleKeys();
    document.addEventListener("keydown", this.matchPressedButtons.bind(this));
  },
};
</script>

<style scoped>
.keyboard-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.keyboard {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #e8e8e8;
}
.keyboard_row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin: 5px 0;
}
.keyboard_row_key {
  display: flex;
  justify-content: center;
  min-width: 45px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: pointer;
}

.keyboard_row_key[name="tab"],
.keyboard_row_key[name="capslock"],
.keyboard_row_key[name="shift"],
.keyboard_row_key[name=" "] {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.keyboard_row_key[name="backspace"] {
  width: 75px;
}

.keyboard_row_key[name="shift"]:nth-child(n + 2),
.keyboard_row_key[name="enter"],
.keyboard_row_key[name="backspace"] {
  display: flex;
  justify-content: flex-end;
}

.jiggling {
  background-color: red;
  animation: jiggle 1s infinite;
}

.highlighted {
  background-color: green;
  color: white;
}

.game-over,
.you-win {
  position: absolute;
  display: none;
  top: -150px;
  left: calc(50% - 130px);
  font-size: 60px;
}

.show-win {
  display: block;
  animation: gamewon 1s infinite ease-in-out;
}

.show-lost {
  display: block;
  animation: gamelost 2s infinite linear;
}
@keyframes jiggle {
  0% {
    color: white;
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    color: black;
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

@keyframes gamewon {
  0% {
    background: #18cf04;
    background: -webkit-linear-gradient(to right, #18cf04 0%, #cf1512 100%);
    background: -moz-linear-gradient(to right, #18cf04 0%, #cf1512 100%);
    background: linear-gradient(to right, #18cf04 0%, #cf1512 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  25% {
    background: #cf1512;
    background: -webkit-linear-gradient(to right, #cf1512 8%, #18cf04 78%);
    background: -moz-linear-gradient(to right, #cf1512 8%, #18cf04 78%);
    background: linear-gradient(to right, #cf1512 8%, #18cf04 78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  50% {
    background: #cf1512;
    background: -webkit-linear-gradient(to right, #cf1512 72%, #18cf04 78%);
    background: -moz-linear-gradient(to right, #cf1512 72%, #18cf04 78%);
    background: linear-gradient(to right, #cf1512 72%, #18cf04 78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  100% {
    background: #18cf04;
    background: -webkit-linear-gradient(to right, #18cf04 0%, #cf1512 100%);
    background: -moz-linear-gradient(to right, #18cf04 0%, #cf1512 100%);
    background: linear-gradient(to right, #18cf04 0%, #cf1512 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
@keyframes gamelost {
  0% {
    font-size: 60px;
  }
  25% {
    font-size: 65px;
  }
  50% {
    font-size: 60px;
  }
  100% {
    font-size: 65px;
  }
}

@media screen and (max-width: 800px) {
  .keyboard {
    flex-direction: row;
  }
  .keyboard_row {
    flex-direction: column-reverse;
    gap: 2px;
    margin: 0 5px;
  }
  .keyboard_row_key {
    min-width: 30px;
    padding: 10px 5px;
  }
  .keyboard_row_key_text {
    transform: rotate(-90deg);
  }
  .keyboard_row_key[name=" "] {
    width: auto;
    height: 100%;
  }
  .keyboard_row_key[name="backspace"] {
    width: auto;
    height: 75px;
  }
}
</style>
