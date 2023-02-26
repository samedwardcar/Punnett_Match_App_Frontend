import React from "react"
// import { useState } from "react";


const Square = () => {
    const [selectValue, setSelectValue] = React.useState("");
    const onChange = (event) => {
        const value = event.tatget.value;
        setSelectValue(value);
    };

    return(
        <>
        <h1>Square Page punnett</h1>
        <select onChange={onChange} className='form-select'>
            <option>
                Select Phenotype
            </option>
            <option value="Freckles">Freckles</option>
            <option value="No Freckles">No Freckles</option>
        </select>
            {selectValue && <h2>{selectValue}</h2>}
        </>
    )
}



export default Square;