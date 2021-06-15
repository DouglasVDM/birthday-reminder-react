import React, { useState } from "react";
import './App.css';
import { data } from "./data"

function App() {
  const [people, setPeople] = useState(data)

  const removeAll = () => {
    setPeople([])
  }
  return (
    <div className="App">
        <section className="container">
          <h3>{ people.length} birthdays today</h3>
          <article className="person">
            {people.map((el) => {
              return(
              <> 
                <img src={el.image} alt="tennis" />
                <div key={el.id}>
                  <h4>{el.name}</h4>
                  <p>{el.age} years</p>
                </div>
              </>
              )
            })}
          </article>
          <button onClick={()=>removeAll()}>Clear All</button>
        </section>
    </div>
  );
}

export default App;
