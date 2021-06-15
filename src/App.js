import React, { useState } from "react";
import './App.css';
import { data } from "./data";
import BirthdayList from "./BirthdayList";

function App() {
  const [people, setPeople] = useState(data)

  const clearAll = () => {
    setPeople([])
  }

  return (
    <div className="container">
      <h3>{ people.length} birthdays today</h3>
      <BirthdayList people={people} />
      <button onClick={()=>clearAll()}>Clear All</button>
    </div>
  );
}

export default App;
