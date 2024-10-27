import React, { useState } from "react";

import Carta from "./Carta";
import Cabecera from "./Cabecera";

//create your first component
const Home = () => {
	
	const [task, setTask] = useState("")

    const handleChange = (event) => {
        setTask(event.target.value)
    }

	return (
		<div>
			<Cabecera input={handleChange}/>
			<Carta/>
			<p>{task}</p>
		</div>
	);
};

export default Home;
