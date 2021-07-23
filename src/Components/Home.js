import React from 'react'

export default function HomePage() {


    //Still have to create useHistory const history
     return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='./Assests/Pizza.jpg'
        alt='For food lovers'
      />
      <button
        onClick={routeToPizza}
        className='md-button pizza-button'
      >
        Order Now!
      </button>
    </div>
  )


}