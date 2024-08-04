import MapChart from "../MapChart";

function Model (props) {
    return (
        <MapChart soil={props.soil} setSoil={props.setSoil} chosenCountry={props.chosenCountry} setChosenCountry={props.setChosenCountry}/>
    )
}


export default Model;