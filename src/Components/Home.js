import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(){
    return (
        <div>
            <div>
            <h1>ALL YOU CAN EAT LAMBDA EATERY</h1>
            <nav className="home-login-subscribe">
            <a href="index.html">HOME</a>
            <Link to={'/pizza'}>
            <button id="order-pizza">ORDER PIZZA</button>
            </Link>
            {/* <button id='order-pizza' onClick={routeToPizzaForm}>Pizza?</button> */}
            </nav>

            </div>




            <section className="logo">
            </section>
        </div>
    )
}