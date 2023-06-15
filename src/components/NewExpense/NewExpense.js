import React, { useState } from "react";

import ExpenseForm from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensteData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensteData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let content;

  if (!isEditing) {
    content = <button onClick={startEditingHandler}>Add new expense.</button>;
  } else {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
