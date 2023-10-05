import "./Expenses.css";
import "./ExpenseItem.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses({ expenses }) {
  const [filterYearValue, setFilterYearValue] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilterYearValue(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() == filterYearValue
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          value={filterYearValue}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
