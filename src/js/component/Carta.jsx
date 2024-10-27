import React from "react";

//create your first component
const Carta = ({task, eliminarTarea}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{task}</p>
                    <button className="btn btn-primary" onClick={()=>eliminarTarea()}>X</button>
                </div>
            </div>
        </div>
    );
};

export default Carta;
