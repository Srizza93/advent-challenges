<template>
  <div class="toaster-container">
    <div class="toaster-subcontainer">
      <div class="close-container" @click="closePopup">
        <close class="close-button" />
        <span>CLOSE</span>
      </div>
      <div class="message-container">
        <img
          class="podcast-cover"
          :src="getImgUrl('podcast-cover.png')"
          alt="podcast-cover"
        />
        <div class="message-container_sub-container">
          <h1 class="message-container_title">GET FREE STUFF IN YOUR INBOX</h1>
          <p class="message-container_paragraph">
            We try to include additional information and companion resources
            with each podcast episode. Sign up now to be included in the fun.
          </p>
          <div class="message-container_email-container">
            <span class="message-container_email-container_title"
              >EMAIL ADDRESS</span
            >
            <div class="message-container_email-container_input-container">
              <input
                class="message-container_email-container_input-container_input"
                type="email"
              />
              <chevron class="chevron" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chevron from "../../assets/chevron.svg";
import close from "../../assets/close.svg";

export default {
  name: "Toaster",
  components: { chevron, close },
  data() {
    return {
      timer: undefined,
      popupSeen: false,
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.png$/);
      return assets("./" + pic);
    },
    showPopup() {
      this.popupSeen = true;
      const popUp = document.querySelector(".toaster-container");
      popUp.classList.add("show-popup");
    },
    closePopup() {
      const popUp = document.querySelector(".toaster-container");
      popUp.classList.remove("show-popup");
      this.timer = setTimeout(() => {
        popUp.classList.add("position-popup");
      }, 5000);
    },
  },
  mounted() {
    document.addEventListener("mouseleave", () => {
      if (!this.popupSeen) {
        clearTimeout(this.timer);
        this.showPopup();
      }
    });
    setTimeout(() => {
      this.showPopup();
    }, 15000);
  },
};
</script>

<style scoped>
.toaster-container {
  position: fixed;
  bottom: -800px;
  transition-duration: 5s;
}
.show-popup {
  bottom: 0;
}
.position-popup {
  position: relative;
  bottom: 0;
}
.toaster-subcontainer {
  display: flex;
  flex-direction: column;
  height: 70%;
  max-width: 400px;
  word-spacing: 5px;
  font-family: Arial, Helvetica, sans-serif;
}
.close-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 25px;
  color: #ff00c7;
  font-weight: bold;
  word-break: keep-all;
  cursor: pointer;
}
.message-container {
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 450px;
  padding: 25px;
  background-color: #ff00c7;
  color: white;
}
.podcast-cover {
  position: absolute;
  width: 150px;
  height: auto;
  top: -75px;
  right: -75px;
}
.message-container_sub-container {
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.message-container_title {
  font-size: 35px;
  margin: 0 75px 0 0;
}
.message-container_paragraph {
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 20px;
}
.message-container_email-container {
  display: flex;
  flex-direction: column;
  color: yellow;
}
.message-container_email-container_title {
  margin-bottom: 5px;
  font-weight: bold;
}
.message-container_email-container_input-container {
  display: flex;
  flex-direction: row;
}
.message-container_email-container_input-container_input {
  width: 350px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  background-color: rgb(255, 255, 255, 0.5);
}
.message-container_email-container_input-container_input:focus {
  outline: none;
}
.chevron {
  width: 25px;
  margin-left: 10px;
  fill: yellow;
  transform: rotate(180deg);
  cursor: pointer;
}
.chevron:hover {
  opacity: 0.7;
}
.close-button {
  fill: #ff00c7;
  margin-right: 10px;
  overflow: visible;
}
@media screen and (max-width: 490px) {
  .toaster-container {
    width: 70%;
    margin-right: 80px !important;
  }
  .podcast-cover {
    width: 100px;
    top: -50px;
    right: -50px;
  }
  .message-container {
    word-break: break-word;
  }
  .message-container_title {
    font-size: 24px;
    margin: 50px 0 0 0;
  }
  .close-container {
    margin-bottom: 50px;
  }
}
</style>
