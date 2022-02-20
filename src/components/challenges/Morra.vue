<template>
  <div class="morra-container">
    <div class="game-field" v-if="!gameOn">
      <span class="morra-container_title">pick one</span>
      <div class="game-container">
        <div
          class="game-container_img-container"
          v-for="option in options"
          :key="option.id + option.name"
          @click="playGame(option)"
        >
          <img
            class="game-container_img-container_img"
            :src="getImgUrl(option.image)"
            :alt="option.name"
          />
          <span>{{ option.name }}</span>
        </div>
      </div>
    </div>
    <div class="game-over" v-else>
      <h2>{{ score }}</h2>
      <div class="game-over_images-container">
        <img
          class="game-over_images-container_img"
          :src="getImgUrl(userChoice.image)"
          :alt="userChoice.name"
        />
        <img
          class="game-over_images-container_img game-over_images-container_pc-img"
          :src="getImgUrl(pcChoice.image)"
          :alt="pcChoice.name"
        />
        <button class="game-over_button" @click="resetGame">play again?</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Morra",
  data() {
    return {
      gameOn: false,
      pcChoice: "",
      userChoice: "",
      score: "",
      options: [
        {
          id: 1,
          name: "Rock",
          win: "Scissors",
          image: "rock.png",
        },
        {
          id: 2,
          name: "Paper",
          win: "Rock",
          image: "paper.png",
        },
        {
          id: 1,
          name: "Scissors",
          win: "Paper",
          image: "scissors.png",
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.png$/);
      return assets("./" + pic);
    },
    playGame(chosenOption) {
      this.userChoice = chosenOption;
      this.gameOn = true;
      this.pcMakesChoice();
      if (chosenOption.name === this.pcChoice.name) {
        this.score = "Equal";
        return;
      }
      if (chosenOption.win === this.pcChoice.name) {
        this.score = "You win!";
        return;
      }
      this.score = "You lose!";
    },
    pcMakesChoice() {
      this.pcChoice =
        this.options[Math.floor(Math.random() * this.options.length)];
    },
    resetGame() {
      this.userChoice = "";
      this.pcChoice = "";
      this.score = "";
      this.gameOn = false;
    },
  },
};
</script>

<style scoped>
.morra-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 30px;
  font-family: "Roboto Mono", monospace;
  background-color: white;
}
.morra-container_title {
  font-size: 32px;
  font-weight: bold;
}
.game-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.game-container_img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 325px;
  height: auto;
  padding: 5px;
  margin: 30px;
  border: 2px solid black;
  cursor: pointer;
}
.game-container_img-container:hover {
  border: 10px solid orange;
}
.game-container_img-container_img {
  display: block;
  width: 100%;
  max-width: 250px;
  max-height: 250px;
}
.game-over {
  display: flex;
  flex-direction: column;
}
.game-over_images-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}
.game-over_images-container_img {
  display: block;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  margin: 30px;
}
.game-over_images-container_pc-img {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.game-over_button {
  position: absolute;
  left: calc(50% - 150px);
  bottom: 30px;
  width: 300px;
  padding: 15px 20px;
  border: 2px solid black;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
}
.game-over_button:hover {
  opacity: 0.7;
}

@media screen and (max-width: 1050px) {
  .morra-container {
    padding: 60px 30px;
  }
  .game-container {
    flex-direction: column;
    align-items: center;
  }
  .game-over_images-container_img {
    max-width: 150px;
    max-height: 150px;
  }
  .game-over_button {
    bottom: -50px;
  }
}
</style>
