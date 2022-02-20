<template>
  <div class="questions-container">
    <div
      class="answers-container"
      v-for="item in list"
      :key="item.id"
      @click="toggleAnswers(item)"
    >
      <chevron v-if="!item.open" class="cheveron" />
      <close v-else class="cheveron" />
      <div class="answers-container_answers" v-if="item.open">
        <p v-for="answer in item.answers" :key="item.id + answer">
          {{ answer }}
        </p>
      </div>
      <div class="answers-container_question">
        <div class="answers-container_question_img-container">
          <question1
            class="answers-container_question_img-container_svg"
            v-if="item.id % 2 === 0"
          />
          <question2
            class="answers-container_question_img-container_svg"
            v-else
          />
        </div>
        <span class="answers-container_question_text">{{ item.question }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import chevron from "../../assets/chevron.svg";
import close from "../../assets/close.svg";
import question1 from "../../assets/question-1.svg";
import question2 from "../../assets/question-2.svg";

export default {
  name: "Questions",
  components: { chevron, close, question1, question2 },
  data() {
    return {
      list: [
        {
          id: 1,
          question:
            "Technically, Svelte is a library and SvelteKit is a framework. What's the difference?",
          answers: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
            "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ],
          open: false,
        },
        {
          id: 2,
          question: "Do you provide a certificate of completion?",
          answers: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
            "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ],
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswers(answer) {
      answer.open = !answer.open;
    },
  },
};
</script>

<style scoped>
.questions-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
}
.answers-container {
  position: relative;
  width: 55%;
  padding: 20px 20px 40px 20px;
  margin: 35px auto 150px auto;
  cursor: pointer;
}
.answers-container_answers {
  padding: 80px 50px 0 50px;
}
.answers-container:nth-child(even) {
  background-color: #ffdd00;
}
.answers-container:nth-child(even):hover {
  background-color: #f0f0f0;
}
.answers-container:nth-child(odd) {
  background-color: #f0f0f0;
}
.answers-container:nth-child(odd):hover {
  background-color: #ffdd00;
}
.answers-container_question {
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  min-height: 110px;
  top: -20px;
  left: -75px;
  border: 5px solid black;
  background-color: white;
  z-index: 1;
}
.answers-container_question_text {
  display: flex;
  align-items: center;
  padding: 30px;
}
.answers-container_question_img-container {
  position: relative;
  width: 100px;
  background-color: black;
}
.answers-container_question_img-container_svg {
  position: absolute;
  top: -40px;
  left: calc(50% - 35px);
}
.cheveron {
  display: block;
  width: 20px;
  margin: 0 0 auto auto;
  fill: black;
  transform: rotate(-90deg);
}
@media screen and (max-width: 600px) {
  .answers-container {
    margin-right: 10px;
  }
  .answers-container_answers {
    padding: 150px 25px 0 25px;
  }
}
</style>
