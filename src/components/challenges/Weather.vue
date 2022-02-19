<template>
  <div class="weather-container">
    <div
      class="daily-weather"
      v-for="(forecast, index) in weather"
      :key="index + forecast.conditions"
    >
      <div class="daily-weather_date">
        <span class="daily-weather_date_week-day">{{
          getFormattedDate(forecast.date)[0]
        }}</span>
        <span class="daily-weather_date_month-day">{{
          getFormattedDate(forecast.date)[1]
        }}</span>
      </div>
      <div
        class="daily-weather_conditions"
        v-bind:class="conditions(forecast.conditions)"
      >
        <div class="svg-container">
          <sunny
            class="svg-conditions sun-svg"
            v-if="forecast.conditions === 'sunny'"
          />
          <cloudy
            class="svg-conditions cloud-svg"
            v-if="forecast.conditions === 'cloudy'"
          />
          <partly-cloudy
            class="svg-conditions part-cloud-svg"
            v-if="forecast.conditions === 'partly-cloudy'"
          />
          <rain
            class="svg-conditions rain-svg"
            v-if="forecast.conditions === 'rainy'"
          />
          <storm
            class="svg-conditions storm-svg"
            v-if="forecast.conditions === 'stormy'"
          />
          <snow
            class="svg-conditions snow-svg"
            v-if="forecast.conditions === 'snowy'"
          />
        </div>
        <div class="daily-weather_conditions_max-t-container">
          <span class="daily-weather_conditions_max-t">{{
            getRoundedTemp(forecast.day.maxtemp_c)
          }}</span
          ><span class="daily-weather_conditions_degrees">°</span>
        </div>
        <div class="daily-weather_conditions_precip-temp-container">
          <precipitation
            class="daily-weather_conditions_precip-temp-container_svg"
          />
          <span>{{ forecast.day.daily_chance_of_rain }}%</span>
        </div>
        <div class="daily-weather_conditions_precip-temp-container">
          <low class="daily-weather_conditions_precip-temp-container_svg" />
          <div
            class="daily-weather_conditions_precip-temp-container_min-temp-container"
          >
            <span>{{ forecast.day.mintemp_c }}</span>
            <span class="daily-weather_conditions_degrees">°</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rain from "../../assets/rainy.svg";
import Storm from "../../assets/stormy.svg";
import Snow from "../../assets/snowy.svg";
import Sunny from "../../assets/sunny.svg";
import Cloudy from "../../assets/cloudy.svg";
import PartlyCloudy from "../../assets/partly-cloudy.svg";
import Precipitation from "../../assets/precipitation.svg";
import Low from "../../assets/low-temp.svg";
import "regenerator-runtime/runtime";
export default {
  name: "Weather",
  components: {
    Rain,
    Storm,
    Snow,
    Sunny,
    Cloudy,
    PartlyCloudy,
    Precipitation,
    Low,
  },
  data() {
    return {
      week: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      weather: {},
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const url =
          "https://api.weatherapi.com/v1/forecast.json?key=222453e567f04cfb83305154220201&q=Lille&days=3&aqi=no&alerts=no";
        const response = await fetch(url)
          .then((response) => response.json())
          .then(
            (data) =>
              (this.weather = data.forecast.forecastday.map((forecast) => {
                return {
                  date: forecast.date,
                  day: forecast.day,
                  conditions: this.skyConditions(forecast),
                };
              }))
          );
      } catch (error) {
        console.log("Can't get data from API: " + error);
      }
    },
    getFormattedDate(date) {
      return [
        this.week[new Date(date).getDay()],
        date.substring(8).replace(/^0+/, ""),
      ];
    },
    skyConditions(forecast) {
      if (forecast.day.daily_chance_of_snow > 20) {
        return "snowy";
      }
      if (forecast.day.daily_will_it_rain && forecast.day.totalprecip_in > 1) {
        return "stormy";
      }
      if (forecast.day.daily_will_it_rain) {
        return "rainy";
      }
      const cloud =
        forecast.hour.reduce((prev, curr) => prev + curr.cloud, 0) / 24;
      if (cloud > 60) {
        return "cloudy";
      }
      if (cloud > 30) {
        return "partly-cloudy";
      }
      return "sunny";
    },
    getRoundedTemp(temp) {
      return Math.round(temp);
    },
    conditions: function (conditions) {
      return {
        sun: conditions === "sunny",
        cloud: conditions === "cloudy",
        "partly-cloud": conditions === "partly-cloudy",
        rain: conditions === "rainy",
        storm: conditions === "stormy",
        snow: conditions === "snowy",
      };
    },
  },
};
</script>

<style scoped>
.weather-container {
  display: flex;
  flex-direction: row;
  padding: 30px;
  border-radius: 25px;
  background-color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
}
.daily-weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 30px;
}
.daily-weather_date {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #4db0d3;
}
.daily-weather_date_month-day {
  font-size: 72px;
}
.daily-weather_date_week-day {
  font-size: 24px;
}
.daily-weather_conditions {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 220px;
  height: 600px;
  padding: 30px 0;
  border-radius: 50px;
  background-color: aqua;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
}
.sun {
  background-color: #e6df95;
  color: #4db0d3;
}
.partly-cloud {
  background-color: #4db0d3;
  color: #e6df95;
}
.cloud {
  background-color: #4db0d3;
  color: #e6df95;
}
.rain {
  background-color: #2b8bad;
  color: #e6df95;
}
.storm {
  background-color: #0e2e3a;
  color: #e6df95;
}
.snow {
  background-color: #bce1ef;
  color: #0e2e3a;
}
.svg-container {
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 100%;
}
.svg-conditions {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: -40px;
  overflow: visible;
}
.sun-svg {
  left: -30px;
}
.cloud-svg {
  top: -10px;
  left: -35px;
}
.part-cloud-svg {
  left: -35px;
  top: -65px;
}
.storm-svg,
.snow-svg {
  left: -35px;
  top: -100px;
}
.rain-svg {
  left: 25px;
}
.daily-weather_conditions_precip-temp-container_icon {
  margin-right: 5px;
}
.daily-weather_conditions_max-t-container {
  position: relative;
  font-size: 30px;
  font-weight: bold;
  margin: auto 0 30px 0;
}
.daily-weather_conditions_max-t {
  font-size: 80px;
}
.daily-weather_conditions_degrees {
  position: absolute;
}
.daily-weather_conditions_precip-temp-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
}
.daily-weather_conditions_precip-temp-container_svg {
  fill: currentColor;
  margin-right: 5px;
}
.daily-weather_conditions_precip-temp-container_min-temp-container {
  position: relative;
}

@media screen and (max-width: 800px) {
  .daily-weather_date {
    width: 75px;
  }
  .daily-weather_date_month-day,
  .daily-weather_conditions_max-t {
    font-size: 42px;
  }
  .daily-weather_conditions {
    width: 110px;
    height: 420px;
  }
  .sun-svg {
    left: -15px;
  }
  .rain-svg {
    left: 10px;
  }
  .cloud-svg {
    left: -20px;
  }
  .snow-svg,
  .storm-svg {
    left: -20px;
    top: -65px;
  }
  .part-cloud-svg {
    left: -20px;
    top: -50px;
  }
}
@media screen and (max-width: 600px) {
  .weather-container {
    padding: 15px 0;
  }
  .daily-weather_date {
    width: 50px;
  }
  .daily-weather_date_month-day,
  .daily-weather_conditions_max-t {
    font-size: 24px;
  }
  .daily-weather_conditions {
    width: 70px;
    height: 300px;
  }
  .daily-weather_conditions_precip-temp-container {
    justify-content: center;
  }
  .daily-weather_conditions_precip-temp-container_svg {
    display: none;
  }
  .sun-svg {
    left: -10px;
  }
  .cloud-svg {
    left: -15px;
  }
  .snow-svg {
    left: -10px;
    top: -55px;
  }
  .part-cloud-svg {
    left: -10px;
    top: -45px;
  }
  .storm-svg {
    left: -15px;
    top: -50px;
  }
}
@media screen and (max-width: 400px) {
  .weather-container {
    width: 100%;
    overflow: auto;
  }
}
</style>
