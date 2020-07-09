import React from 'react';

function SumPersons() {
    function clickHandler() {


        console.log("2");
        
    }
    return(
        <div>
            <button onClick={clickHandler}>clic</button>
        </div>
    )
}

export default SumPersons;