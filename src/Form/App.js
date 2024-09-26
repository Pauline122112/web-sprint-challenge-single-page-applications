import React, { useState, useEffect } from "react";
import PizzaOrder from "./PizzaOrder";
import PizzaForm from "./PizzaForm";
import "../App.css";
import schema from "../validation/formSchema";
import axios from "axios";
import * as yup from "yup";

//////////////// INITIAL STATES ////////////////

const initialFormValues = {
	///// TEXT INPUTS /////
	username: "",
	email: "",
	///// HERE IS THE DROPDOWN /////
	pizza: "",
	///// HERE IS THE RADIO BUTTON /////
	gluten: "",
	///// HERE IS THE CHECKBOXES /////
	mushroom: false,
	tomatoes: false,
	pineapple: false,
};
const initialFormErrors = {
	username: "",
	email: "",
	pizza: "",
	gluten: "",
};
const initialPizzas = [];
const initialDisabled = true;

export default function OrderForm() {
	//////////////// STATES ////////////////

	const [pizzas, setPizzas] = useState(initialPizzas); // array of friend objects
	const [formValues, setFormValues] = useState(initialFormValues); // object
	const [formErrors, setFormErrors] = useState(initialFormErrors); // object
	const [disabled, setDisabled] = useState(initialDisabled); // boolean

	//////////////// HELPERS ////////////////
	//IMPLEMENT! ON SUCCESS ADD NEWLY CREATED ORDER TO STATE

	const postNewOrder = (newOrder) => {
		axios
			.post("https://reqres.in/api/orders", newOrder)
			.then((res) => {
				setPizzas([...pizzas, res.data]);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				debugger;
				console.log(err);
			})
			.finally(() => {
				// clean the form
			});
	};

	// if the validation is unsuccessful, we can set the error message

	const validate = (name, value) => {
		yup
			.reach(schema, name)

			.validate(value)
			.then((valid) => {
				//eslint-disable-line
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})

			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
	};

	//////////////// EVENT HANDLERS ////////////////

	//runs inside inputChange. Going to validate so there aren't any errors
	//Run using YUP- validating a specific key value pair
	const inputChange = (name, value) => {
		validate(name, value);
		setFormValues({
			...formValues,
			[name]: value, // NOT AN ARRAY
		});
	};

	//hammer in a new Order then ship it
	const formSubmit = () => {
		const newPizza = {
			username: formValues.username.trim(),
			email: formValues.email.trim(),
			pizza: formValues.pizza.trim(),
			gluten: formValues.gluten.trim(),

			//filters out any toppings that aren't TRULY when we go into formValues whether it be mushrooms or tomatoes
			toppings: ["mushroom", "tomatoes", "pineapple"].filter(
				(top) => formValues[top]
			),
		};
		// POSTING NEW ORDER USING HELPER
		postNewOrder(newPizza);
	};

	//////////////// SIDE EFFECTS ////////////////
	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			// if the schema is valid then the boolean will be true, if not, then false
			console.log(valid);
			setDisabled(!valid);
		});
	}, [formValues]);

	return (
		<div className="container">
			<header>
				<h1>ORDER PIZZA</h1>
			</header>

			{/* INJECTING THE FORM, EVERYTHING IT NEEDS TO FUNCTION */}
			<PizzaForm
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>

			{pizzas.map((pizzaOr) => {
				return <PizzaOrder key={pizzaOr.id} details={pizzaOr} />;
			})}
		</div>
	);
}
