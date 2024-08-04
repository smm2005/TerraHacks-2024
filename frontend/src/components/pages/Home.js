import desert from "./img/desert.jpg"
import tundra from "./img/tundra.png"
import modelclickgif from "./img/WebAppGIF1.gif"
import mapclickgif from "./img/WebAppGIF2.gif"

function Home () {
    return (
        <div id="homepage">
            <div id="section1">
                <h1 id="question">What role does climate <br></br> change play in fertility?</h1>
                <h2 id="answer">As the climate changes, the fertility patterns will change such as a <br></br> decrease in soil quality, which results in a limited
                amount of plant <br></br> growth, which can ultimately harm the food chain and ultimately <br></br> the wildlife and habitats across the environment.</h2>
                <img id="desertImage" src={desert} alt="Desert" width="23%" height="33%"></img>
                <img id="tundraImage" src={tundra} alt="Tundra" width="23%" height="33%"></img>
            </div>
            <div id="section2">
                <h1 id="question2">What can we use <br></br> to observe fertility?</h1>
                <h2 id="answer2">Click on the 'Model' tab in the navigation bar.<br></br> You will then be directed to an interactive <br></br>
                map, where you can select a country/region<br></br>of your choice.</h2>
                <img id="modelClickImage" src={modelclickgif} alt="Model Click"></img>
                <img id="mapClickImage" src={mapclickgif} alt="Map Click" width="23%" height="49%"></img>
            </div>
            <div id="section3">
                <h1 id="question3">What can we do about<br></br> infertility in the lands?</h1>
                <h2 id="answer3">On the 'Solutions' tab, extensive explanation of infertility<br></br>and it's influences on the 
                environment will be provided. <br></br>Please note that viewing the solutions requires selection<br></br>of a country along the interactive map.</h2>
            </div>
        </div>
    )
}

export default Home;