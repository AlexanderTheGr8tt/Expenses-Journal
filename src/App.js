import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2021, 1, 20),
  },
  { id: 2, title: "New Desk", amount: 1049.99, date: new Date(2021, 2, 28) },
  {
    id: 3,
    title: "Toilet Paper",
    amount: 23.68,
    date: new Date(2021, 5, 31),
  },
  { id: 4, title: "Bike", amount: 493.7, date: new Date(2021, 12, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
