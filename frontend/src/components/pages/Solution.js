import country from "../MapChart";

function Solution(props){
    const chosenCountry = props.chosenCountry;
    return(
        <>
        {chosenCountry ? 
            <div>
                <h1>COUNTRY WAS CHOSEN</h1>
            </div>
            : 
            <div>
                <h1>COUNTRY NOT CHOSEN YET</h1>
            </div>
        }
        </>
    )
}

export default Solution;