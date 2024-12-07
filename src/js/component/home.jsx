import React from "react";
import {TrafficLight} from "./TrafficLight";
//create your first component

const Home = () => {

	return (
<div className="text-center">
			<h1 className="text-center mt-2">Traffic Light</h1>
			<TrafficLight />
		</div>
	);
};

export default Home;