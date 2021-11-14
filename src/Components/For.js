import React, {Fragment, useState} from 'react';

const Mifor = () => {
    const [arreglo, setArreglo] = useState([1,2,3,4,5,6,7,8,9])
    
    const agrega = () => {
        setArreglo([...arreglo, 1])
    }
    return (
        <Fragment>
            <h2>recorriendo un arreglo con un ciclo FOR</h2>
            <p>para agregar mas datos oprime el botón
                <button onClick={agrega}>clic</button></p>
            <ul>
                {
                    arreglo.map((item,index) =>
                        <li key={index}>  Indice: {index} - valor: {item} </li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default Mifor;