import { NavLink } from "react-router-dom";
//import generateText from "\backend\AI.js";
import {useEffect, useState} from "react";

function Solution(props){
    const [AIresponse, setAIresponse] = useState("");
    const chosenCountry = props.chosenCountry;
    
    const newest_soil = props.soil[0];
    const oldest_soil = props.soil[-1];

    function getSoil(soilVal){
      let soil;
        switch (Math.round(soilVal)) {
            case 9, 10:
              soil = "Mollisols"
            case 8:
              soil = "Andisols"
            case 7:
              soil = "Alfisols"
            case 6:
              soil = "Histosols/Vertisols"
            case 5:
              soil = "Inceptisols"
            case 4:
              soil = "Oxisols/Ultisols"
            case 3:
              soil = "Spodosols/Entisols"
            case 2:
              soil = "Aridisols"
            case 1, 0:
              soil = "Gelisols"
            
          }
        return soil;
    }

    const stringForAI="How can I prevent " + getSoil(oldest_soil) + " soil from turning into " + 
    getSoil(newest_soil) + " soil?";
    const supportString = "Solution to prevent " + getSoil(oldest_soil) + " soil from turning into " +
    getSoil(newest_soil) + " soil:";

    useEffect(() => {
      const getAIData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/hugging-face`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({text: stringForAI}),

        })
        const data = await response.json();
        if (data.result.length > 0) {
          setAIresponse(data.result);
        } 
        console.log(data);

      }
      if (chosenCountry) {
        getAIData();
      }
      
    }, [chosenCountry]);

    return(
        <>
        {chosenCountry ? 
            <div className = "solution-elements" id = "format-for-solution">
                <div id = "sol-header">
                {supportString}
                </div>
                <div>
                  {AIresponse.length > 0 && AIresponse}
                </div>
            </div>
            : 
            <div className="solution-elements">
                <h2>To see our proposed solution, please select a country from <br></br>the interactive map on the 
                    </h2>
                    <NavLink to="/model" id="hyplink">MODEL</NavLink>
                <h2>page and come back<br></br> to a page full of intuitive Generative AI solutions!
                </h2>
            </div>
        }
        </>
    )
    
}

export default Solution;