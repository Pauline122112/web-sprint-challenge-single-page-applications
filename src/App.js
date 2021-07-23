import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Completion from './components/PizzaCheckout'
import Form from './components/OrderForm'
import * as yup from 'yup'
import axios from 'axios'
import './App.css'

const initialFormValues = {
  //Text
  username: '',
  special: '',
  //dropdown
  size: '',
  //checkboxes
  chicken: false,
  cheese: false,
  pineapple: false,
  mushroom: false,

};

const initialFormErrors = {
  username: '',
  special: '',
  size: '',
}
const pizzaList = [];
const initialDisabled = true

export default function App() {

  const [pizzas, setPizzas] = useState(pizzaList);
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean


 const orderSubmitted = (newPizza) => {
    return setPizzas(formValues)
  }
  const postNewPizza = (newPizza) => {
    axios
      .post("https://reqres.in/api/orders", newPizza)
      .then((res) => {
        setPizzas([...pizzas, res.data.data]);
        setFormValues(initialFormValues);
        console.log(`HERE is postNewPizza`, postNewPizza);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      })
      .finally(() => {});
  };



  const inputChange = (name, value) => {

  }
  const formSubmit = () => {
    const newPizza = {
      username: formValues.username.trim(),
      special: formValues.special.trim(),
      size: formValues.size.trim(),
      toppings: ['ham', 'olives', 'onions', 'cheese'].filter(tops => formValues[tops] ),
    }
    postNewPizza(newPizza)
  };

  useEffect(() => {
    // getPizzas();
  }, [])
  useEffect(() => {}, []);




  return (


    <div>
      <Home id="order-pizza" 
        // values={formValues} 
        // update={updateForm} 
        // submit={submitForm}
        />
        {/* <Link to='/'>HOME</Link> */}
      <Switch>
      <Route path='/pizza/complete'>
            {/* Route to Success Page */}
            <Completion
             change={inputChange} 
             values={formValues} 
             submit={formSubmit}
             orders={pizzas}
            />
          </Route>
{/* may need exact  */}
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
         
            errors={formErrors}
          />
        </Route>

        <Route exact path='/'>
          
        </Route>


      </Switch>
    

    </div>


  );
}