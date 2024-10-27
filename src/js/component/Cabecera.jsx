import React from "react";


//create your first component
const Cabecera = ({ input, nuevaTarea }) => {



    return (
        <div>
            <header>
                <h1><span className="todo">To do</span> list</h1>
            </header>
            <div className="input">
                <input type="text" name="text" placeholder="Proxima tarea" onChange={input} required onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        nuevaTarea();
                    }
                }}
                />
            </div>
            
        </div>

    );
};

export default Cabecera;
