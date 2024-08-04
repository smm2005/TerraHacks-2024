import { NavLink } from "react-router-dom";
//import generateText from "\backend\AI.js";

function Solution(props){
    const chosenCountry = props.chosenCountry;
    
    const newest_soil = props.soil[0];
    const oldest_soil = props.soil[-1];

    const stringForAI="How can I prevent " + getSoil(oldest_soil) + " soil from turning into " + 
    getSoil(newest_soil) + " soil?";
    const supportString = "Solution to prevent " + getSoil(oldest_soil) + " soil from turning into " +
    getSoil(newest_soil) + " soil:";

    return(
        <>
        {chosenCountry ? 
            <div>
                supportString
                <>generateText(stringForAI)</>
            </div>
            : 
            <div className="solution-elements">
                <h1 >To see our proposed solution, please select a country from <br></br>the interactive map on the 
                    </h1>
                    <NavLink to="/model" id="hyplink">MODEL</NavLink>
                <h1>page and come back<br></br> to a page full of intuitive Generative AI solutions!
                </h1>
            </div>
        }
        </>
    )
    function getSoil(soilVal){
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
}

export default Solution;