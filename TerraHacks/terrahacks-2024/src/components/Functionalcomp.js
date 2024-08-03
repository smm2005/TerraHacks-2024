import React, { useState } from 'react'

function Functionalcomp(props){

    const [city, setCity] = useState("");

    const load = function(){
        fetch("misc/country-list.csv")
        .then(response => response.text)
        .then(responseText =>{
            setCity( responseText )
        })
    }

    return (
    <h1 id="title">{props.name}</h1>
    )
}

export default Functionalcomp