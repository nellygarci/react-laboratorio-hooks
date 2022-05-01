/* llamarlo */
import React, {useState, useEffect} from "react";

/* destructurar el useState */
const Contador = () =>{
    const [cuenta, setCuenta] = useState (100);

    /* funciones */ 
    const aumentar = ()=>{
         setCuenta(cuenta+1);
    };

    const disminuir = () => {
        setCuenta(cuenta-1);
    };

    const reset = () => {
        setCuenta(cuenta*0);
    };
/* usar el usEffect */
    useEffect (() => {
      console.log(`El contador va en $cuenta`);
    
    }, [cuenta]);

    return (
        <div>
            <center>
                <h1> {cuenta} </h1>
                <button onClick = {aumentar} > Aumentar Contador</button>
                <button onClick = {disminuir} > Disminuir Contador</button>
                <button onClick= {()=> setCuenta(cuenta * cuenta)}>Cuadrado del contador</button>
                <button onClick = {reset}  > Reset</button>
            </center>
        </div>
    );
};

    export default Contador;