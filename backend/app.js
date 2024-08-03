const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SLR = require('ml-regression').SLR;
const MLR = require("ml-regression-multivariate-linear");

const app = express();
const regions_routes = require("./routes/region_routes")
const port = 9897;


var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,

}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(regions_routes);

const features = [
  [1, 2],
  [2, 3],
  [4, 5],
  [3, 6],
  [5, 8]
];
const target = [3, 5, 9, 8, 13];

let inputs = [80, 60, 10, 20, 30];
let outputs = [20, 40, 30, 50, 60];

let regression = new SLR(inputs, outputs);

const x = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4]
];
// Y0 = X0 * 2, Y1 = X1 * 2, Y2 = X0 + X1
const y = [
  [1],[2],[3],[4]
];
const mlr = new MLR(x, y);

const coefficients = mlr.weights; // Access model weights (coefficients)
const intercept = mlr.intercept;

function functionString (model) {
  let str = "";
  if (model.intercept){
    for (let i = 0; i < model.weights.length-1; i++) {
      str += model.weights[i] + " * x" + i + " + ";
    }
    str += model.weights[model.weights.length-1] ;
  }
}

//function for determining soil type for input/output (to display image and to provide solution)
function soilType (soilVal) {

  switch (Math.floor(soilVal)) {
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
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`the result is ${coefficients}`);
  console.log(`the result is ${functionString()}`);
  console.log(`the result is ${mlr.predict([4, 5])}`);
});

module.exports = app;