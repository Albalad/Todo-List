import React from "react";


//create your first component
const Cabecera = ({ input, nuevaTarea }) => {



    return (

        <header>
            <h1>To do list</h1>
            <input type="text" name="text" placeholder="Proxima tarea" onChange={input} required onKeyDown={(event) => {
                if (event.key === "Enter") {
                    nuevaTarea();
                }
            }}
            />
            <button onClick={() => { nuevaTarea() }}>Aceptar tarea</button>
        </header>

    );
};

export default Cabecera;
