import React, { useState } from 'react'

function Functionalcomp(props){

    const [count, setCount] = useState(0);

    return (
    <div>
        <h1>{props.name}</h1>
        <h2>{count}</h2>
        <button id="btn" onClick={() => setCount(count + 1)}>Enter</button>
    </div>
    )
}

export default Functionalcomp