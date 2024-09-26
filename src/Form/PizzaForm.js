import React from "react";
//IMPORTING REACT TO PIZZA FORM

//Remember to export as PizzaForm
export default function PizzaForm(props) {
	const { values, submit, change, disabled, errors } = props;

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		const valueToUse = type === "checkbox" ? checked : value;
		change(name, valueToUse);
	};

	//Text with submit button
	return (
		<form className="form container" onSubmit={onSubmit}>
			<div className="form-group submit">
				<h2>Add Pizza</h2>

				{/* 🔥 DISABLE THE BUTTON */}
				<button disabled={disabled}>submit</button>

				{/* 🔥 RENDERING THE VALIDATION ERRORS */}
				<div className="errors">
					<div>{errors.username}</div>
					<div>{errors.email}</div>
					<div>{errors.pizza}</div>
					<div>{errors.gluten}</div>
				</div>
			</div>

			<div className="form-group inputs">
				<h4>General information</h4>

				{/* ////////// TEXT INPUTS ////////// */}

				<label>
					Username&nbsp;
					<input
						value={values.username}
						onChange={onChange}
						name="username"
						type="text"
					/>
				</label>

				{/* ////////// TEXT INPUTS ////////// */}

				<label>
					Email
					<input
						value={values.email}
						onChange={onChange}
						name="email"
						type="text"
					/>
				</label>

				{/* ////////// DROPDOWN //////////  */}
				<label>
					Pizza
					<select onChange={onChange} value={values.pizza} name="pizza">
						<option value="">- Select an option -</option>
						<option value="hawaiian">Hawaiian</option>
						<option value="pepperoni">Pepperoni</option>
						<option value="sausage">Sausage</option>
						<option value="cheese">Cheese</option>
						<option value="chicken">Chicken</option>
						<option value="ham">Ham</option>
						<option value="vegetarian">Vegetarian</option>
					</select>
				</label>

				{/* ////////// RADIO BUTTONS ////////// */}

				<h4>Gluten Free:</h4>

				<label>
					Yes
					<input
						type="radio"
						name="gluten"
						value="yes"
						checked={values.gluten === "yes"}
						onChange={onChange}
					/>
				</label>

				{/* ////////// RADIO BUTTONS ////////// */}

				<label>
					No
					<input
						type="radio"
						name="gluten"
						value="no"
						checked={values.gluten === "no"}
						onChange={onChange}
					/>
				</label>
			</div>

			<div className="form-group checkboxes">
				<h4>Toppings</h4>

				{/* ////////// CHECKBOXES ////////// */}

				<label>
					Mushrooms
					<input
						type="checkbox"
						name="mushroom"
						checked={values.mushroom}
						onChange={onChange}
					/>
				</label>
				{/* ////////// CHECKBOXES ////////// */}
				<label>
					Tomatoes
					<input
						type="checkbox"
						name="tomatoes"
						checked={values.tomatoes}
						onChange={onChange}
					/>
				</label>
				{/* ////////// CHECKBOXES ////////// */}
				<label>
					Pineapple
					<input
						type="checkbox"
						name="pineapple"
						checked={values.pineapple}
						onChange={onChange}
					/>
				</label>
			</div>
		</form>
	);
}
