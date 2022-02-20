<template>
  <div class="modal-container">
    <div class="modal-container_modal" @click="showContent"></div>
    <div
      class="modal-container_hidden-content"
      v-bind:class="{ 'hidden-content-visible': visible }"
    >
      <div class="modal-container_hidden-content_sub-container">
        <span class="modal-container_hidden-content_sub-container_title"
          >ELGATO KEY LIGHTS</span
        >
        <span class="modal-container_hidden-content_sub-container_parag"
          >These lights are great if you shoot video at your desk.</span
        >
        <span class="modal-container_hidden-content_sub-container_parag"
          >My desk is pushed up against the wall, so I didn’t have room for a
          large soft box. These lights still deliver on the look that I wanted.
          Plus, it comes with a desktop app where you can adjust the brightness
          and temperature.</span
        >
        <button class="modal-container_hidden-content_sub-container_button">
          BUY NOW for $169.99
        </button>
      </div>
      <div class="modal-container_hidden-content_sub-container">
        <img
          class="modal-container_hidden-content_img-container_img"
          :src="getImgUrl(elgato.image)"
          :alt="elgato.name"
        />
      </div>
      <close class="close-button" @click="closeContent" />
    </div>
  </div>
</template>

<script>
import close from "../../assets/close.svg";

export default {
  name: "Modal",
  components: { close },
  data() {
    return {
      elgato: {
        image: "elgato-key-light.png",
        name: "elgato key light",
      },
      visible: false,
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.png$/);
      return assets("./" + pic);
    },
    showContent() {
      this.visible = true;
    },
    closeContent() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.modal-container {
  position: relative;
  width: 100%;
  max-width: 680px;
  height: 485px;
  font-weight: bold;
  border-radius: 15px;
  background: url("../../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.photo-blur {
  filter: blur(8px);
}
.modal-container_modal {
  margin-top: 10%;
  margin-left: 13%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f41e82;
  cursor: pointer;
}
.modal-container_modal:hover {
  animation: modal 1s linear infinite;
}
.modal-container_hidden-content {
  display: none;
  position: absolute;
  top: 20px;
  left: 10%;
  flex-direction: row;
  width: 80%;
  height: auto;
  padding: 20px;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  z-index: 9999;
}
.hidden-content-visible {
  display: flex;
}
.modal-container_hidden-content_sub-container {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.modal-container_hidden-content_img-container_img {
  display: block;
  width: 200px;
  height: auto;
  margin-top: 30px;
}
.modal-container_hidden-content_sub-container_title {
  font-size: 34px;
  color: #f41e82;
}
.modal-container_hidden-content_sub-container_parag {
  font-size: 14px;
  margin: 15px 0 0 0;
}
.modal-container_hidden-content_sub-container_button {
  background-color: #ffd200;
  padding: 10px 20px;
  margin: 15px 0;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
}
.modal-container_hidden-content_sub-container_button:hover {
  opacity: 0.7;
}
.close-button {
  width: 100%;
  fill: gray;
  cursor: pointer;
}
@keyframes modal {
  0% {
    outline: none;
  }
  50% {
    outline: 3px solid #f41e82;
  }
  100% {
    outline-offset: 20px;
    outline: transparent;
  }
}

@media screen and (max-width: 650px) {
  .modal-container_hidden-content {
    flex-direction: column-reverse;
  }
  .modal-container_hidden-content_sub-container {
    align-items: center;
  }
  .modal-container_hidden-content_img-container_img {
    width: 100%;
    max-width: 200px;
  }
  .modal-container_hidden-content_sub-container_title {
    font-size: 24px;
  }
}

@media screen and (max-width: 490px) {
  .modal-container {
    height: 350px;
  }
}
</style>
