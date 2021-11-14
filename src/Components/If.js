import React, {Fragment, useState} from 'react';

const Miif = () => {
    const num = 30
    const [num1, setNum1] = useState(5)
    
    return (
        <Fragment>
            <p>la vaiable num vale {num} entonces {
                num >= 10 ? "es mayor o igual a 10" : "es menor a 10"
            }</p>

            <p>la variable num1 vale {num1} entonces {
                num1 >= 10 ? "es amyor o igual a 10" : "es menor a 10"
            }</p>
        </Fragment>
    );
}
 
export default Miif;