import React, { useState } from "react";

import Carta from "./Carta";

//create your first component
const Cabecera = ({input}) => {

    

	return (
		<div>
			<header>
                <h1>To do list</h1>
                <input type="text" name="text" placeholder="Proxima tarea" onChange={input}/>
            </header>
		</div>
	);
};

export default Cabecera;
