<template>
  <div class="signup-container">
    <span class="signup-title">Signup</span>
    <form class="signup-form">
      <div
        class="signup-form_requirement-container"
        v-for="requirement in requirements"
        :key="requirement.id + requirement.name"
      >
        <label
          class="signup-form_requirement-container_label"
          :for="requirement.name"
          >{{ requirement.text }}</label
        >
        <input
          class="signup-form_requirement-container_input"
          :type="requirement.type"
          :name="requirement.name"
          :autocomplete="requirement.type + '-signup'"
          @focusout="inputValidation($event, requirement)"
        />
        <component
          class="signup-form_requirement-container_icon"
          v-if="requirement.icon"
          :is="requirement.icon"
          :icon="requirement.icon"
          @click="toggleEye(requirement)"
        />
        <div
          class="signup-form_requirement-container_validation-container"
          v-if="requirement.validation"
        >
          <component
            class="signup-form_requirement-container_validation-container_check-mark"
            :is="requirement.validation"
          ></component>
          <span
            v-if="requirement.validation === 'red-cross'"
            class="signup-form_requirement-container_validation-container_error"
            >{{ requirement.error }}</span
          >
        </div>
      </div>
    </form>
    <input class="signup-submit" type="submit" value="Submit" />
  </div>
</template>

<script>
import uName from "../../assets/user-name.svg";
import showEye from "../../assets/show-eye.svg";
import hideEye from "../../assets/hide-eye.svg";
import greenCheck from "../../assets/green-check.svg";
import redCross from "../../assets/red-cross.svg";

export default {
  name: "Signup",
  components: { uName, showEye, hideEye, greenCheck, redCross },
  data() {
    return {
      requirements: [
        {
          id: 1,
          text: "Name",
          name: "fname",
          type: "text",
          icon: "uName",
          validation: "",
          error: "Must enter a valid name",
        },
        {
          id: 2,
          text: "Email",
          name: "emaila",
          type: "email",
          validation: "",
          error: "Must enter a valid email",
        },
        {
          id: 3,
          text: "Password",
          name: "vpassword",
          type: "password",
          icon: "show-eye",
          validation: "",
          error: "Must enter a valid password",
        },
        {
          id: 4,
          text: "Confirm Password",
          name: "cpassword",
          type: "password",
          icon: "show-eye",
          validation: "",
          error: "Password and confirm password must match",
        },
      ],
    };
  },
  methods: {
    toggleEye(requirement) {
      if (requirement.icon !== "show-eye" && requirement.icon !== "hide-eye") {
        return;
      }
      if (requirement.icon === "show-eye") {
        requirement.icon = "hide-eye";
        requirement.type = "text";
      } else {
        requirement.icon = "show-eye";
        requirement.type = "password";
      }
    },
    inputValidation(event, requirement) {
      const value = event.target.value;
      if (requirement.text === "Name") {
        if (!/[a-zA-Z]$/.test(value)) {
          requirement.validation = "red-cross";
          return;
        }
        requirement.validation = "green-check";
      }
      if (requirement.text === "Email") {
        if (
          !/^[a-zA-Z0-9]([a-zA-Z0-9!#$%&'*+-/=?^_`{|])*@([a-zA-Z0-9])+[.-]?([a-zA-Z0-9])+(\.([a-zA-Z]){2,}){1,2}$/.test(
            value
          )
        ) {
          requirement.validation = "red-cross";
          return;
        }
        requirement.validation = "green-check";
      }
      if (requirement.text === "Password") {
        if (
          /[a-z]/.test(value) &&
          /[A-Z]/.test(value) &&
          /[0-9]/.test(value) &&
          value.length >= 8
        ) {
          requirement.validation = "green-check";
          return;
        }
        requirement.validation = "red-cross";
      }
      if (requirement.text === "Confirm Password") {
        const password = document.querySelector(
          ".signup-form_requirement-container_input[name='vpassword']"
        );
        if (value !== password.value) {
          requirement.validation = "red-cross";
          return;
        }
        requirement.validation = "green-check";
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 75px 50px;
  border-radius: 15px;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
}
.signup-title {
  margin: 0 0 20px 0;
  font-size: 40px;
  font-weight: bold;
}
.signup-form {
  display: flex;
  flex-direction: column;
}
.signup-form_requirement-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 60px;
  padding: 10px 0 10px 10px;
  margin: 10px 0;
  border: 2px solid #a7a7a7;
  border-radius: 5px;
}
.signup-form_requirement-container_label {
  position: absolute;
  top: -10px;
  left: 20px;
  padding: 0 5px;
  font-size: 14px;
  font-weight: bold;
  color: #0000ff;
  background-color: white;
}
.signup-form_requirement-container_icon[icon="show-eye"] {
  cursor: pointer;
}
.signup-form_requirement-container_icon[icon="hide-eye"] {
  cursor: pointer;
}
.signup-form_requirement-container_icon[icon="show-eye"]:hover {
  opacity: 0.7;
}
.signup-form_requirement-container_icon[icon="hide-eye"]:hover {
  opacity: 0.7;
}
.signup-form_requirement-container_input {
  width: 100%;
  border: none;
  font-size: 18px;
}
.signup-form_requirement-container_input:focus {
  outline: none;
}
.signup-form_requirement-container_icon {
  margin: 0 10px;
}
.signup-submit {
  height: 60px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #0000ff;
  cursor: pointer;
}
.signup-submit:hover {
  opacity: 0.7;
}
.signup-form_requirement-container_validation-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: calc(100% + 5px);
  width: 100%;
}
.signup-form_requirement-container_validation-container_check-mark {
  width: 100%;
  max-width: 20px;
  height: auto;
  margin-right: 5px;
}
.signup-form_requirement-container_validation-container_error {
  width: 100px;
  font-size: 14px;
  color: red;
}

@media screen and (max-width: 670px) {
  .signup-form_requirement-container {
    margin: 20px 0;
  }
  .signup-submit {
    margin-top: 20px;
  }
  .signup-form_requirement-container_validation-container {
    top: 60px;
    left: 5px;
  }
  .signup-form_requirement-container_validation-container_error {
    width: auto;
  }
}

@media screen and (max-width: 310px) {
  .signup-form_requirement-container_label {
    left: 0;
  }
  .signup-form_requirement-container_validation-container {
    top: 20px;
    left: calc(100% + 5px);
  }
  .signup-form_requirement-container_validation-container_error {
    display: none;
  }
}
</style>
