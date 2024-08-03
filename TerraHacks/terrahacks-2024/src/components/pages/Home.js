import desert from "./img/desert.jpg"
import tundra from "./img/tundra.png"

function Home () {
    return (
        <div id="homepage">
            <h1 id="question">What role does climate <br></br> change play in fertility?</h1>
            <h2 id="answer">As the climate changes, the fertility patterns will change such as a <br></br> decrease in soil quality, which results in a limited
            amount of plant <br></br> growth, which can ultimately harm the food chain and ultimately <br></br> the wildlife and habitats across the environment.</h2>
            <img id="desertImage" src={desert} alt="Desert" width="350px" height="250px"></img>
            <img id="tundraImage" src={tundra} alt="Tundra" width="350px" height="250px"></img>
        </div>
    )
}

export default Home;