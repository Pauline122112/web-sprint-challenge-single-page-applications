import React, { useState, useEffect } from "react";
// 👉 STEP 2 - React Router imports (Route, Link and Switch)
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import OrderForm from "./Form/App";

function fetchStock() {
	return Promise.resolve({ success: true });
}

export default function App() {
	const [stock, setStock] = useState([]);

	useEffect(() => {
		fetchStock().then((res) => setStock(res.data));
	}, []);

	// Make Links to navigate Home (`/`) and to order Pizza (`/pizza`)

	return (
		<div className="App">
			<nav>
				<h1 className="store-header">LAMBDA&apos;s AMAZING PIZZARIA!</h1>
				<div className="nav-links">
					<Link to="/">Home</Link>
					<Link to="/pizza">Order Online</Link>
				</div>
			</nav>

			{/* Adding Switch with a Route for each of the components imported at the top - don't need to use exact when using switch*/}
			<Switch>
				<Route path="/pizza">
					<OrderForm items={stock} />
				</Route>

				<Route path="/">
					<Home />
				</Route>

				<Route>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}
