<template>
  <div class="calendar-container">
    <div class="current-month-container">
      <Chevron class="current-month-container_chevron" @click="prevMonth" />
      <span class="current-month-container_year-month"
        >{{ shownDate.year }} - {{ months[shownDate.month] }}
      </span>
      <Chevron
        class="current-month-container_chevron chevron-right"
        @click="nextMonth"
      />
    </div>
    <div class="weeks-container">
      <table
        border="0"
        align="center"
        cellpadding="0"
        cellspacing="0"
        width="100%"
      >
        <tr>
          <td
            v-for="(weekDay, index) in weekDays"
            :key="index + weekDay"
            class="weeks-container_weekdays weeks-container_elements"
          >
            {{ weekDay }}
          </td>
        </tr>
        <tr v-for="line in 6" :key="line + 'week'">
          <td
            v-for="(day, index) in slicedMonth(line)"
            :key="index + 'day' + day"
            :class="'weeks-container_elements day-' + day"
          >
            {{ day }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Chevron from "../../assets/chevron.svg";

export default {
  name: "Calendar",
  components: { Chevron },
  data() {
    return {
      shownDate: {
        year: 2022,
        month: 0,
        day: 1,
      },
      weekDays: ["S", "M", "T", "W", "T", "F", "S"],
      months: [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ],
    };
  },
  computed: {
    daysOfMonth() {
      const firstDay = new Date(
        this.shownDate.year,
        this.shownDate.month,
        1
      ).getDay();
      const lastDay = new Date(
        this.shownDate.year,
        this.shownDate.month + 1,
        0
      ).getDate();
      return new Array(42)
        .fill("", 0)
        .map((value, index) =>
          index >= firstDay && index - firstDay + 1 <= lastDay
            ? index - firstDay + 1
            : ""
        );
    },
    todayDate() {
      const date = new Date();
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
      };
    },
  },
  methods: {
    updateToday() {
      this.shownDate = this.todayDate;
    },
    highlightToday() {
      if (
        this.todayDate.year === this.shownDate.year &&
        this.todayDate.month === this.shownDate.month
      ) {
        const today = document.querySelector(`.day-${this.todayDate.day}`);
        today.classList.add("today");
        return;
      }
    },
    slicedMonth(line) {
      return this.daysOfMonth.slice((line - 1) * 7, line * 7);
    },
    prevMonth() {
      if (this.shownDate.month === 0) {
        this.shownDate.month = 11;
        this.shownDate.year -= 1;
        return;
      }
      this.shownDate.month -= 1;
    },
    nextMonth() {
      if (this.shownDate.month === 11) {
        this.shownDate.month = 0;
        this.shownDate.year += 1;
        return;
      }
      this.shownDate.month += 1;
    },
  },
  mounted() {
    this.updateToday();
    this.highlightToday();
  },
  updated() {
    this.highlightToday();
  },
};
</script>

<style scoped>
.calendar-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 470px;
  padding: 25px;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
  font-family: Arial, Helvetica, sans-serif;
}
.current-month-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.current-month-container_chevron {
  fill: #f41e82;
  width: 50px;
  height: 40px;
  padding: 2px 10px;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: #f0f3fa;
  cursor: pointer;
}
.current-month-container_chevron:hover {
  border: 2px solid #0071c2;
}
.chevron-right {
  transform: rotate(180deg);
}
.weeks-container_weekdays {
  font-weight: bold;
}
.weeks-container_elements {
  height: 60px;
  font-size: 20px;
  text-align: center;
}
.today {
  background-color: rgb(252, 186, 6);
  border-radius: 50%;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .calendar-container {
    width: 370px;
  }
}
</style>
