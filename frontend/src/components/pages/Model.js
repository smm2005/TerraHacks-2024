import MapChart from "../MapChart";

function Model (props) {
    return (
        <MapChart rainfall={props.rainfall} setRainfall={props.setRainfall} 
                    temperature={props.temperature} setTemperature={props.temperature}
                    soil={props.soil} setSoil={props.setSoil} chosenCountry={props.chosenCountry} setChosenCountry={props.setChosenCountry}/>
    )
}


export default Model;