import React from 'react'

function PizzaOrder({ details }) {
  if (!details) {
    return <h3>Working fetching your Order&apos;...</h3>
  }

  return (
    <div className='pizza container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Pizza: {details.role}</p>
      <p>Gluten Free: {details.gluten}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default PizzaOrder
