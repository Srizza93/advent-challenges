<template>
  <div class="simplified-budget-container">
    <div class="main-container">
      <div class="main-container_budget-container">
        <h1 class="main-container_budget-container_main-title">
          Simplified Budget
        </h1>
        <div class="main-container_budget-container_input-container">
          <span>Budget Amount</span>
          <input
            class="main-container_budget-container_input-container_input"
            type="number"
            @focusout="updateBudget"
          />
        </div>
        <div class="main-container_budget-container_expenses-container">
          <div
            class="main-container_budget-container_input-container main-container_budget-container_input-container-lower"
          >
            <span>Expense</span>
            <input
              class="main-container_budget-container_input-container_input"
              type="text"
              name="vendor"
            />
          </div>
          <div
            class="main-container_budget-container_input-container main-container_budget-container_input-container-lower"
          >
            <span>Amount</span>
            <input
              class="main-container_budget-container_input-container_input"
              type="number"
              name="amount"
            />
          </div>
          <button
            class="main-container_budget-container_expenses-container_add-expense"
            @click="addExpense"
          >
            +
          </button>
        </div>
      </div>
      <div class="main-container_expenses-container">
        <h3 class="main-container_expenses-container_title">Expenses</h3>
        <div class="main-container_expenses-container_expenses">
          <div
            class="main-container_expenses-container_expenses_expense"
            v-for="(expense, index) in expenses"
            :key="index + expense.vendor"
          >
            <span>{{ expense.vendor }}</span>
            <span
              class="main-container_expenses-container_expenses_expense_cost"
              >${{ expense.cost }}</span
            >
            <trash class="trash" @click="deleteExpense(expense)" />
          </div>
        </div>
      </div>
    </div>
    <div class="end-amounts-container">
      <div>
        <span>Income</span>
        <span>${{ budget }}</span>
      </div>
      <div>
        <span>Expenses</span>
        <span>${{ expensesSum }}</span>
      </div>
      <div>
        <span>Balance</span>
        <span v-bind:class="classBalance">${{ balance }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import trash from "../../assets/trash.svg";

export default {
  name: "SimplifiedBudget",
  components: { trash },
  data() {
    return {
      budget: 0,
      expenses: [],
    };
  },
  computed: {
    expensesSum() {
      return this.expenses.reduce((prev, curr) => prev + Number(curr.cost), 0);
    },
    balance() {
      return this.budget - this.expensesSum;
    },
    classBalance: function () {
      return {
        "positive-amount": this.balance > 0,
        "negative-amount": this.balance < 0,
      };
    },
  },
  methods: {
    addExpense() {
      const cost = document.querySelector(
        ".main-container_budget-container_input-container_input[name='amount']"
      ).value;
      const vendor = document.querySelector(
        ".main-container_budget-container_input-container_input[name='vendor']"
      ).value;
      this.expenses.push({ cost: cost, vendor: vendor });
    },
    updateBudget(event) {
      this.budget = event.target.value;
    },
    deleteExpense(expense) {
      this.expenses.splice(this.expenses.indexOf(expense), 1);
    },
  },
};
</script>

<style scoped>
.simplified-budget-container {
  display: flex;
  flex-direction: column;
  width: 95%;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.main-container {
  display: flex;
  flex-direction: row;
}
.main-container_budget-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px;
  background-color: #323645;
}
.main-container_budget-container_input-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 40px 0;
  background-color: #414452;
  border-radius: 15px;
}
.main-container_budget-container_input-container-lower {
  width: 40%;
}
.main-container_budget-container_input-container_input {
  padding: 10px 0;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background: none;
  color: white;
}
.main-container_budget-container_expenses-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.main-container_budget-container_expenses-container_add-expense {
  border: none;
  font-size: 40px;
  background: none;
  color: #51f129;
  cursor: pointer;
}
.main-container_budget-container_expenses-container_add-expense:hover {
  opacity: 0.7;
}
.main-container_expenses-container {
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 50%;
  background-color: black;
}
.main-container_expenses-container_title {
  color: #51f129;
}
.main-container_expenses-container_expenses_expense {
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  margin: 15px 0;
  border-bottom: 1px solid rgb(118, 118, 118);
}
.main-container_expenses-container_expenses_expense_cost {
  margin: 0 50px 0 auto;
}
.end-amounts-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  color: black;
}
.positive-amount {
  color: green;
}
.negative-amount {
  color: red;
}
.trash {
  cursor: pointer;
}
.trash:hover {
  opacity: 0.7;
}

@media screen and (max-width: 730px) {
  .main-container_budget-container_expenses-container {
    flex-direction: column;
  }

  .main-container_budget-container_input-container {
    width: 100%;
  }
}
@media screen and (max-width: 515px) {
  .main-container_budget-container {
    padding: 25px;
  }
  .main-container_budget-container_main-title {
    font-size: 25px;
  }
  .main-container_expenses-container_expenses_expense_cost {
    margin-right: 15px;
  }
}
</style>
