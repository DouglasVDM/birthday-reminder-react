import React from 'react'

function BirthdayList({ people }) {
  return (
    <div className="person">
      {people.map((el) => {
        return (
          <React.Fragment>
            <img src={el.image} alt="tennis" />
            <div key={el.id}>
              <h4>{el.name}</h4>
              <p>{el.age} years</p>
            </div>
          </React.Fragment>
        )
      })
      }
    </div>
  )
}

export default BirthdayList
