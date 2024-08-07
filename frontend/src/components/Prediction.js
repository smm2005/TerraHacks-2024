import {useState, useEffect} from "react";
import "./Prediction.css";
import { Chart } from "react-google-charts";
import MapChart from "./MapChart";
function Prediction () {
    const [prediction, setPrediction] = useState(false);
    const [rainfall, setRainfall] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const time = [1, 2, 3, 4, 5]

    const onClickEvent = (country) => {
        setPrediction(!prediction);
        // const response = fetch("http://localhost:9897/country-data?country=${country}");
        // const data = response.json();
        // console.log(data);
        const data = {country: "Japan", image: "japan.png", temperature: 20, temperature_rate: 1.234, temperature_intercept: 1, rainfall: 40, rainfall_rate: 3.143, rainfall_intercept: 1, soil_type: 2}

            const newrainfall = []
            const newtemperature = []

            time.forEach((t) => {
                newrainfall.push([t, data.rainfall_rate * t + data.rainfall_intercept] );
                newtemperature.push([t, data.temperature_rate * t + data.temperature_intercept]);
            })
            console.log(newrainfall);

            const rainfall_data = [
                ["Time", "Rainfall"],
                ...newrainfall 
            ];


            const temperature_data = [
                ["Time", "Temperature"], 
                ...newtemperature
            ]


            setRainfall(rainfall_data);
            setTemperature(temperature_data);

    }



    const option_rainfall = {
        title: "Rainfall Prediction",
        curveType: "function",
        legend: { position: "bottom" },
    };

    const option_temperature = {
        title: "Temperature Prediction",
        curveType: "function",
        legend: { position: "bottom" },
    }


    return (
        <div>

            <div className="main-container">
                <div className="picture-container" >
                    <MapChart />
                </div>

                <div className="model-predict-container">
                    yo
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="100%"
                        data={rainfall}
                        options={option_rainfall}
                        />
                    <Chart
                        chartType="LineChart"
                        title="Predict Temperature"
                        width="100%"
                        height="100%"
                        data={temperature}
                        options={option_temperature}
                        />
                </div>
            </div>
            
        </div>
    )
}

export default Prediction;