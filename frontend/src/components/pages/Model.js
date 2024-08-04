import MapChart from "../MapChart";

function Model (props) {
    return (
        <MapChart chosenCountry={props.chosenCountry} setChosenCountry={props.setChosenCountry}/>
    )
}


export default Model;