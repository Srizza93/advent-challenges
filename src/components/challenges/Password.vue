<template>
  <div class="password-container">
    <div class="password-input-container">
      <input
        class="password-input-container_input"
        type="text"
        v-model="password"
      />
      <div class="password-input-container_icon-container">
        <copy
          class="password-input-container_icon-container_icon"
          @click="copyToClipboard"
        />
        <span class="password-input-container_icon-container_text"
          >Copied!</span
        >
      </div>
    </div>
    <div class="range-container">
      <input
        class="range-container_slider"
        name="range-slider"
        type="range"
        min="6"
        max="32"
        v-model="rangeValue"
      />
      <label for="range-slider">{{ rangeValue }} characters</label>
    </div>
    <label
      class="checkbox-container"
      v-for="option in options"
      :key="option.id + option.name"
      :for="option.name"
    >
      <input
        class="checkbox-container_checkbox"
        type="checkbox"
        :name="option.name"
        @click="tickCheckbox(option)"
        checked
      />
      <span class="checkbox-container_checkmark"></span>
      <span class="checkbox-container_text">
        {{ option.name }} ({{ getListShortner(option.list) }})
      </span>
    </label>
  </div>
</template>

<script>
import copy from "../../assets/copy-icon.svg";

export default {
  name: "Password",
  components: { copy },
  data() {
    return {
      rangeValue: 20,
      options: [
        {
          id: 1,
          name: "Include Symbols",
          list: [
            "~",
            "\`",
            "!",
            "@",
            "#",
            "$",
            "€",
            "¢",
            "¥",
            "§",
            "%",
            "°",
            "^",
            "&",
            "*",
            "(",
            ")",
            "-",
            "_",
            "+",
            "=",
            "{",
            "}",
            "[",
            "]",
            "|",
            "/",
            "\\",
            ",",
            ";",
            '"',
            "´",
            "<",
            ">",
            ",",
            ".",
            "?",
          ],
          isChecked: true,
        },
        {
          id: 2,
          name: "Include Numbers",
          list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          isChecked: true,
        },
        {
          id: 3,
          name: "Include Lowercase Characters",
          list: [...Array(26)].map((char, i) => String.fromCharCode(i + 97)),
          isChecked: true,
        },
        {
          id: 4,
          name: "Include Uppercase Characters",
          list: [...Array(26)].map((char, i) => String.fromCharCode(i + 65)),
          isChecked: true,
        },
        {
          id: 5,
          name: "Exclude Symilar Characters",
          list: ["i", "I", "l", "j", "J", "1", "L", "o", "0", "O"],
          isChecked: true,
        },
      ],
    };
  },
  computed: {
    filteredCharacters() {
      return Array.from(this.options)
        .map((option) => {
          if (option.id !== 5 && option.isChecked) {
            if (this.options[4].isChecked) {
              return option.list
                .filter((char) => !this.options[4].list.includes(char))
                .join("");
              return;
            }
            return option.list.join("");
          }
        })
        .join("")
        .split("");
    },
    password() {
      return "1"
        .repeat(this.rangeValue)
        .split("")
        .map(
          (char) =>
            this.filteredCharacters[
              Math.floor(Math.random() * (this.filteredCharacters.length - 1))
            ]
        )
        .join("");
    },
  },
  methods: {
    tickCheckbox(option) {
      option.isChecked = !option.isChecked;
    },
    copyToClipboard() {
      const self = this;
      navigator.clipboard.writeText(this.password);
      const iconContainer = document.querySelector(
        ".password-input-container_icon-container"
      );
      iconContainer.classList.add("copied");
      setTimeout(function () {
        self.clearCopyButton(iconContainer);
      }, 5000);
    },
    clearCopyButton(iconContainer) {
      iconContainer.classList.remove("copied");
    },
    getListShortner(list) {
      return Array.from(list).slice(0, 4).join("");
    },
  },
};
</script>

<style scoped>
.password-container {
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  border-radius: 15px;
  background-color: rgb(211 225 212);
  font-family: Arial, Helvetica, sans-serif;
}
.password-input-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}
.password-input-container_input {
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 16px;
}
.password-input-container_icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
}
.password-input-container_icon-container_icon {
  width: 35px;
  margin-right: 5px;
  fill: rgb(100, 144, 155);
  cursor: pointer;
}
.password-input-container_icon-container_icon:hover {
  opacity: 0.7;
}
.password-input-container_icon-container_text {
  visibility: hidden;
  font-weight: bold;
  color: green;
}
.copied .password-input-container_icon-container_icon {
  fill: green;
}
.copied .password-input-container_icon-container_text {
  visibility: visible;
}
.range-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
}
.range-container_slider {
  width: 250px;
  height: 5px;
  margin-right: 20px;
  background: rgb(154, 200, 211);
  border-radius: 25px;
  -webkit-appearance: none;
  appearance: none;
}
.range-container_slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(100, 144, 155);
  cursor: pointer;
}
.range-container_slider::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(100, 144, 155);
  cursor: pointer;
}
.checkbox-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-container_checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
}

.checkbox-container_checkmark {
  height: 25px;
  width: 25px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: rgb(154, 200, 211);
}
.checkbox-container_checkbox:checked + .checkbox-container_checkmark {
  background-color: rgb(100, 144, 155);
}

.checkbox-container_checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container_checkbox:checked + .checkbox-container_checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkbox-container_checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media screen and (max-width: 600px) {
  .password-input-container_input {
    width: 300px;
  }
}
@media screen and (max-width: 505px) {
  .password-input-container_input {
    width: 200px;
  }
}
@media screen and (max-width: 415px) {
  .password-input-container_input,
  .range-container_slider {
    width: 150px;
  }
}
</style>
