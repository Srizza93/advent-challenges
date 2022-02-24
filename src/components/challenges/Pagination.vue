<template>
  <div class="pagination-container">
    <table
      class="pagination-container_table"
      border="0"
      align="center"
      cellpadding="0"
      cellspacing="30"
    >
      <tr>
        <td v-for="option in sortOptions" :key="option.id + option.name">
          <table>
            <tr>
              <th class="table-container_highlight" :name="option.name">
                {{ option.text }}
              </th>
              <td>
                <sort class="sort-up" @click="sortList($event, option)" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr
        v-for="employee in paginationArray"
        :key="employee.id + employee.name"
      >
        <td>{{ employee.id }}</td>
        <td class="table-container_highlight">
          <input
            class="table-container_input"
            type="text"
            :value="employee.name"
            stype="name"
            disabled
          />
        </td>
        <td>
          <input
            class="table-container_input"
            type="text"
            :value="employee.email"
            stype="email"
            disabled
          />
        </td>
        <td>
          <input
            class="table-container_input"
            type="text"
            :value="employee.title"
            stype="title"
            disabled
          />
        </td>
        <td class="emplpyee-list_edit">
          <edit @click="editLine($event, employee)" />
        </td>
      </tr>
      <tr>
        <td class="table-footer" colspan="8">
          <table
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <tr>
              <td>{{ employees.length }} Results</td>
              <td class="arrows-container">
                <chevron class="chevron" @click="prevPage" />
                <span
                  class="arrows-container_span arrows-container_span-current-page"
                  >{{ actualPage }}</span
                >
                <span class="arrows-container_span">of</span>
                <span class="arrows-container_span">{{ lastPage }}</span>
                <chevron class="chevron chevron-rigth" @click="nextPage" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import edit from "../../assets/edit.svg";
import sort from "../../assets/sort.svg";
import chevron from "../../assets/chevron.svg";

export default {
  name: "Pagination",
  components: { edit, sort, chevron },
  data() {
    return {
      index: 0,
      sortOptions: [
        {
          id: 1,
          text: "ID",
          name: "id",
          isClicked: true,
        },
        {
          id: 2,
          text: "Name",
          name: "name",
          isClicked: false,
        },
        {
          id: 3,
          text: "Email Address",
          name: "email",
          isClicked: false,
        },
        {
          id: 4,
          text: "Job Title",
          name: "title",
          isClicked: false,
        },
      ],
      employees: [
        {
          id: 1,
          name: "Cameron Williamson",
          email: "cameron.wiliamson@example.com",
          title: "Software Developer",
        },
        {
          id: 2,
          name: "Jenny Wilson",
          email: "jenny.wilson@example.com",
          title: "Project Manager",
        },
        {
          id: 3,
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          title: "Marketing Coordinator",
        },
        {
          id: 4,
          name: "Wade Warren",
          email: "wade.warren@example.com",
          title: "Software Tester",
        },
        {
          id: 5,
          name: "Esther Howard",
          email: "esther.howard@example.com",
          title: "Web Designer",
        },
        {
          id: 6,
          name: "Kristin Watson",
          email: "kristin.watson@example.com",
          title: "Marketing Coordinator",
        },
        {
          id: 7,
          name: "Esther Howard",
          email: "esther.howard@example.com",
          title: "Web Designer",
        },
        {
          id: 8,
          name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          title: "UI/UX Designer",
        },
        {
          id: 9,
          name: "Ralph Edwards",
          email: "ralph.edwards@example.com",
          title: "Software Tester",
        },
        {
          id: 10,
          name: "Courtney Henry",
          email: "courtney.henry@example.com",
          title: "Ethical Hacker",
        },
        {
          id: 11,
          name: "Willie Jennings",
          email: "willie.jennings@example.com",
          title: "Team Leader",
        },
        {
          id: 12,
          name: "Neveah Simmons",
          email: "neveah.simmons@example.com",
          title: "Team Leader",
        },
        {
          id: 13,
          name: "Theresa Webb",
          email: "theresa.webb@example.com",
          title: "Software Tester",
        },
        {
          id: 14,
          name: "Debbe Baker",
          email: "debbe.baker@example.com",
          title: "Software Developer",
        },
        {
          id: 15,
          name: "Ronald Richards",
          email: "ronald.richards@example.com",
          title: "Software Developer",
        },
        {
          id: 16,
          name: "Deanna Curtis",
          email: "deanna.curtis@example.com",
          title: "Scrum Master",
        },
        {
          id: 17,
          name: "Felicia Reid",
          email: "felicia.reed@example.com",
          title: "Ethical Hacker",
        },
        {
          id: 18,
          name: "Jessie Alexander",
          email: "jessie.alexander@example.com",
          title: "Project Manager",
        },
        {
          id: 19,
          name: "Sam Smith",
          email: "sam.smith@example.com",
          title: "Ethical Hacker",
        },
        {
          id: 20,
          name: "Eleanor Rigby",
          email: "eleanor.rigby@example.com",
          title: "UI/UX Designer",
        },
        {
          id: 21,
          name: "Devon Lane",
          email: "devon.lane@example.com",
          title: "Team Leader",
        },
        {
          id: 22,
          name: "Guy Hawkins",
          email: "guy.hawkins@example.com",
          title: "Team Leader",
        },
        {
          id: 23,
          name: "Jim Parks",
          email: "jim.parks@example.com",
          title: "Ethical Hacker",
        },
        {
          id: 24,
          name: "Susanne Ford",
          email: "susanne.ford@example.com",
          title: "Software Developer Manager",
        },
        {
          id: 25,
          name: "Kathryn Murphy",
          email: "kathryn.murphy@example.com",
          title: "Project Manager",
        },
        {
          id: 26,
          name: "Cody Fisher",
          email: "cody.fisher@example.com",
          title: "Software Developer",
        },
        {
          id: 27,
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          title: "Software Tester",
        },
        {
          id: 28,
          name: "Karen MacAfee",
          email: "karen.macafee@example.com",
          title: "UI/UX Designer",
        },
        {
          id: 29,
          name: "Dianne Russell",
          email: "dianne.russell@example.com",
          title: "Ethical Hacker",
        },
        {
          id: 30,
          name: "Bessie Cooper",
          email: "bessie.cooper@example.com",
          title: "Scrum Master",
        },
      ],
      sortClicked: {
        option: "id",
        isClicked: true,
      },
    };
  },
  computed: {
    actualPage() {
      return this.index / 10 + 1;
    },
    lastPage() {
      return Math.floor(this.employees.length / 10);
    },
    paginationArray() {
      return this.sortedList.slice(this.index, this.index + 10);
    },
    sortedList() {
      const sorted = this.employees.sort((prev, curr) => {
        return prev[this.sortClicked.option] > curr[this.sortClicked.option]
          ? 1
          : -1;
      });
      if (this.sortClicked.isClicked) {
        return sorted;
      }
      return sorted.reverse();
    },
  },
  methods: {
    prevPage() {
      this.index >= 10 ? (this.index -= 10) : this.index;
    },
    nextPage() {
      this.index < this.employees.length - 10 ? (this.index += 10) : this.index;
    },
    sortList(event, option) {
      let sortOption = Array.from(event.target.closest("tr").children)
        .find((element) =>
          element.classList.contains("table-container_highlight")
        )
        .getAttribute("name");
      this.sortClicked = {
        option: sortOption,
        isClicked: option.isClicked,
      };
      option.isClicked = !option.isClicked;
      this.toggleArrows(event, option);
    },
    toggleArrows(event, option) {
      const svg = event.target.closest("svg");
      const ascending = document.querySelector(".sort-up.ascending");
      const discending = document.querySelector(".sort-up.discending");
      if (ascending) {
        ascending.classList.remove("ascending");
      }
      if (discending) {
        discending.classList.remove("discending");
      }
      if (option.isClicked) {
        svg.classList.add("ascending");
        return;
      }
      svg.classList.add("discending");
    },
    editLine(event, employee) {
      const line = Array.from(event.target.closest("tr").children);
      const updatedData = { id: employee.id };
      line.forEach((element, index) => {
        const input = Array.from(element.children)[0];
        if (input && input.tagName === "INPUT") {
          input.disabled = !input.disabled;
          if (input.disabled) {
            updatedData[input.getAttribute("stype")] = input.value;
            if (index === line.length - 2) {
              this.employees = this.employees.map((employeeM) =>
                employeeM.id === employee.id
                  ? (employeeM = updatedData)
                  : employeeM
              );
            }
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.pagination-container {
  width: 100%;
  max-width: 1000px;
  background-color: #f8f8ff;
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: scroll;
}
.pagination-container_table {
  width: max-content;
}
.table-container_highlight,
.table-container_highlight > input {
  font-weight: bold;
  color: #363daa;
}
.table-container_input {
  width: 100%;
  border: none;
  background: none;
  font-size: 16px;
  text-overflow: ellipsis;
}
.sort-up {
  margin-left: 5px;
  cursor: pointer;
}
.sort-up:hover {
  opacity: 0.7;
}
.ascending > .ascending,
.discending > .discending {
  fill: #363daa;
}
.emplpyee-list_edit {
  cursor: pointer;
}
.emplpyee-list_edit:hover {
  opacity: 0.7;
}
.table-footer {
  border-top: 1px solid black;
}
.arrows-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.arrows-container_span {
  padding: 10px;
}
.arrows-container_span-current-page {
  margin: 0 0 0 5px;
  background-color: #f8f8ff;
}
.chevron {
  fill: #363daa;
  width: 20px;
  cursor: pointer;
}
.chevron:hover {
  opacity: 0.7;
}
.chevron-rigth {
  transform: rotate(180deg);
}
.arrow-highlight {
  fill: #363daa;
}
</style>
