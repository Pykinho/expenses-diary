import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData, cancelEditing }) => {
  const [titleValue, setTitleValue] = useState("");
  const titleChangeHandler = (event) => {
    setTitleValue(event.target.value);
  };

  const [amountValue, setAmountValue] = useState("");
  const amountChangeHandler = (event) => {
    setAmountValue(event.target.value);
  };

  const [dateValue, setDateValue] = useState("");
  const dateChangeHandler = (event) => {
    setDateValue(event.target.value);
  };

  const expenseData = {
    title: titleValue,
    amount: +amountValue,
    date: new Date(dateValue),
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSaveExpenseData(expenseData);
    setTitleValue("");
    setAmountValue("");
    setDateValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleValue} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
            value={amountValue}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={"2023-01-01"}
            max={"2024-12-31"}
            onChange={dateChangeHandler}
            value={dateValue}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
