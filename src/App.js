import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const DUMMY_EXPENSES = [
    { id: "e1", title: "Car Insurance", amount: 350.55, date: new Date(2020, 4, 26) },
    { id: "e2", title: "Balloons", amount: 532.66, date: new Date(2020, 1, 15) },
    { id: "e3", title: "Green Coconuts", amount: 777.95, date: new Date(2022, 3, 18) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //depends on previous value so use function
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
