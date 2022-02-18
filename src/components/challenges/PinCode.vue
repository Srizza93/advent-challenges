<template>
  <div class="pin-code-container">
    <div class="verification-step" v-if="!codeVerified">
      <h3 class="verification-step_pin-title">AUTHORIZATION CODE</h3>
      <span>Please enter the code that we sent to {{ hiddenPhone() }}.</span>
      <div class="verification-step_input-container">
        <input
          class="verification-step_input-container_input"
          maxlength="1"
          type="text"
          v-for="(item, index) in 4"
          :key="index + item"
          @keydown="pasteToAllInputs"
          v-model="codes[index]"
        />
      </div>
      <button class="verification-step_verification-button" @click="verifyCode">
        VERIFY
      </button>
    </div>
    <div class="successfull-verificatiion" v-else>
      <h3 class="verification-step_pin-title">SUCCESSFULL VERIFICATION</h3>
      <button class="successfull-verificatiion_next" @click="nextStep">
        Click here to proceed
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PinCode",
  data() {
    return {
      phone: "328934824",
      verificationCode: "1234",
      codes: ["1", "2", "3", "4"],
      codeVerified: false,
      command: false,
    };
  },
  methods: {
    hiddenPhone() {
      return `(***) *** - ${this.phone.substring(5)}`;
    },
    verifyCode() {
      if (this.codes.join("") === this.verificationCode) {
        this.codeVerified = true;
      }
    },
    nextStep() {
      this.codeVerified = false;
    },
    async pasteToAllInputs(event) {
      const cmd = ["MetaLeft", "MetaRight", "ControlLeft"];
      if (cmd.includes(event.code)) {
        this.command = true;
        return;
      }
      if (this.command && event.code !== "KeyV") {
        this.command = false;
      }
      if (this.command && event.code === "KeyV") {
        const cliboard = await navigator.clipboard.readText();
        this.codes = cliboard.split("");
      }
    },
  },
};
</script>

<style scoped>
.pin-code-container {
  width: 500px;
  height: 415px;
  padding: 70px 35px 30px;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.verification-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.verification-step_pin-title {
  color: #6778e8;
  letter-spacing: 2px;
}
.verification-step_input-container {
  display: flex;
  margin: 40px 0;
}
.verification-step_input-container_input {
  width: 80px;
  height: 85px;
  border: none;
  margin: 0 10px;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: #6778e8;
  background-color: #f0f3fa;
}
.verification-step_verification-button {
  width: 100%;
  height: 75px;
  border: none;
  border-radius: 25px;
  letter-spacing: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(93.32deg, #8d9eff -10.93%, #a674fb 113.82%);
  cursor: pointer;
}
.verification-step_verification-button:hover {
  opacity: 0.7;
}
.successfull-verificatiion {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.successfull-verificatiion_next {
  border: none;
  font-size: 20px;
  color: #0071c2;
  background-color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.successfull-verificatiion_next:hover {
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .pin-code-container {
    width: auto;
  }
  .verification-step_input-container_input {
    width: 40px;
    height: 45px;
    font-size: 30px;
  }
}
</style>
