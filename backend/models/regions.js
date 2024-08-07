const express = require("express");
const database = require("../database/db");
const MLR = require("ml-regression-multivariate-linear");
const { HfInference } = require("@huggingface/inference");
const dotenv = require("dotenv");
const {HF_ACCESS_TOKEN} = require("../secret-data");

const hf = new HfInference(HF_ACCESS_TOKEN);

async function generateText(stringForAI) {
    let out = "";
    for await (const chunk of hf.chatCompletionStream({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      messages: [
        { role: "user", content: stringForAI },
      ],
      max_tokens: 500,
      temperature: 0.1,
      seed: 0,
    })) {
      if (chunk.choices && chunk.choices.length > 0) {
        out += chunk.choices[0].delta.content;
      }
    }
    return out;
  }

function functionString (model) {
    let str = "";
    if (model.intercept){
      for (let i = 0; i < model.weights.length-1; i++) {
        str += model.weights[i] + " * x" + i + " + ";
      }
      str += model.weights[model.weights.length-1] ;
    }
  }

const getRainfall = (req, res) => {
    const country  = req.query.country;

    const query = `SELECT * FROM rainfall where Country = "${country}"`;
    console.log(query);
    database.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        if (results.length > 0){
            res.status(200).send(results[0])
        } else {
            res.status(404).send({message: "No data found for the country" })
        }
        
    })
}

const getTemperature = (req, res) => {
    const  country  = req.query.country;
    const query = `SELECT t.Country AS Country, t.Temperature as temperature, c.Normalize as CRI FROM temp AS t LEFT JOIN CRI_table AS c ON t.Country = c.Country WHERE t.Country = "${country}"`;
    console.log(query);
    database.query(query,  (err, results) => {
        if (err) throw err;
        console.log(results);
        if (results.length > 0){
            res.status(200).send(results[0])
        } else {
            res.status(404).send({message: "No data found for the country" })
        }
    })
}

const getSoil = (req, res) => {
    const country = req.query.country;
    const query = `SELECT * FROM soil_table WHERE Country = "${country}"`;
    console.log(query);
    database.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        if (results.length > 0){
            res.status(200).send(results[0])
        } else {
            res.status(404).send({message: "No data found for the country" })
        }
    })
}

const predictFertility = (req, res) => {
    const country = req.query.country;

    const query = "SELECT * FROM fertility WHERE country = ?";
    database.query(query, [country], (err, results) => {
        if (err) throw err;
        
        const features = [];
        const target = [];
        results.map((result) => {
            features.push([result.climateChange, result.temperature, result.rainfall,  result.soilType  ]); //
        });

        results.map((result) => [
            target.push([result.fertility])
        ]);

        const mlr = new MLR(features, target);

        res.status(200).send({model: mlr, model_string: functionString(mlr)});

    })
}

const getCountryData = (req, res) => {
    const country = req.query.country;
    const query = "SELECT * FROM fertility WHERE country = ?";
    database.query(query, [country], (err, results) => {
        if (err) throw err;
        res.status(200).send(results[0]);
    });
}


const huggingFaceResponse = async (req, res) => {
    const {text} = req.body

    const result = await generateText(text);
    console.log(result)
    res.status(200).send({result: result});

}

module.exports = {
    predictFertility, 
    getCountryData, 
    getRainfall, 
    getTemperature, 
    getSoil, 
    huggingFaceResponse
}