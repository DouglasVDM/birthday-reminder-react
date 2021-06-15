import React, { useState } from "react";
import './App.css';
import { people } from "./People"

function App() {  
  return (
    <div className="App">
      <main>
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
        </section>
      </main>
    </div>
  );
}

export default App;
