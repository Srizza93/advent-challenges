<template>
  <div class="star-rating-container">
    <span class="score">Score: {{ score }}</span>
    <div class="stars-container">
      <component
        class="stars-container_star"
        v-for="star in starsList"
        :key="star.id + 'star'"
        :is="star.name"
        :rating="star.id"
        @click="rateProduct(star)"
      />
    </div>
  </div>
</template>

<script>
import starOff from "../../assets/star-regular.svg";
import starOn from "../../assets/star-solid.svg";

export default {
  name: "StarRating",
  components: { starOff, starOn },
  data() {
    return {
      starsList: [
        {
          id: 1,
          name: "starOn",
        },
        {
          id: 2,
          name: "starOff",
        },
        {
          id: 3,
          name: "starOff",
        },
        {
          id: 4,
          name: "starOff",
        },
        {
          id: 5,
          name: "starOff",
        },
      ],
      score: 1,
    };
  },
  methods: {
    rateProduct(star) {
      const rating = star.id;
      if (rating) {
        this.score = rating;
        this.starsList.forEach((star, index) => {
          index < rating || index === 0
            ? (star.name = "starOn")
            : (star.name = "starOff");
        });
      }
    },
  },
};
</script>

<style scoped>
.star-rating-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 50px;
  border-radius: 25px;
  background-color: aliceblue;
  text-align: center;
}
.score {
  font-size: 20px;
  font-weight: bold;
}
.stars-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px;
}
.stars-container_star {
  min-width: 25px;
  max-width: 100px;
  cursor: pointer;
}

@media screen and (max-width: 450px) {
  .star-rating-container {
    padding: 25px 0;
  }
}
</style>
