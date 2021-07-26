import React from "react";
// We'll need React Router's own version of the History API
import { useHistory } from "react-router-dom";
export default function Home() {
	const history = useHistory();

	//IMPERATIVE CODE VS DECLARATIVE COULD WHICH WAS THE <Link />
	const routeToPizza = () => {
		console.log(history);

		history.push("/pizza");
	};

	//Banner image that I found on unsplash that has a button linking to the form.

	return (
		<div className="home-wrapper">
			<img
				className="home-image"
				src="https://source.unsplash.com/MQUqbmszGGM"
				alt=""
			/>

			{/* Button to the form */}
			<button onClick={routeToPizza} className="md-button pizza-button">
				Order your Pizza HERE!
			</button>
		</div>
	);
}
