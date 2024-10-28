import React, { useState } from "react";

import Carta from "./Carta";
import Cabecera from "./Cabecera";
import { Toaster, toast } from 'sonner'

//create your first component
const Home = () => {

	//Creamos una variable vacía para que almacene los datos del input
	const [tarea, setTarea] = useState("")

	// Creamos un array vacio para que almacene los datos que le llegan de la variable de tarea
	const [task, setTask] = useState([]);

	//Creamos la funcion para que el programa lea el valor que hay en el input y lo almacene en tarea
	const handleChange = (event) => {
		setTarea(event.target.value);
	}

	//Creamos la funcion para que añada un elemento nuevo al array task
	const nuevaTarea = () => {
		//Validamos que si no hay informacion en la variable tarea no pueda añadir nada al array de task
		if (tarea == "") {
			toast.error('Event has not been created');
		} else {
			setTask([...task, tarea]);
			setTarea("");
		}
	}

	

	return (
		<div>
			<Cabecera input={handleChange} nuevaTarea={nuevaTarea} tarea={tarea} />
			<div className="row tareas">
				<Toaster />
				{task.length > 0 ? (
					//Mapeamos el array que tenemos en cada momento
					task.map((element) => {

						//Creamos la funcion que elimina la carta seleccionada
						const eliminarTarea = () => {
							setTask(task.filter((elemento) => elemento != element))
						}
						//Retornamos una carta por cada elemento del array
						return (
							<>
								<Carta eliminarTarea={eliminarTarea} task={element} />
							</>
						)
					})
				) : (
					<div className="tareasPendientes">
						<p >No hay tareas, añadir tareas</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
