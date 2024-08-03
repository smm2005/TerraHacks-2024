const express = require("express");
const database = require("../database/db");
const MLR = require("ml-regression-multivariate-linear");

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

    const query = `SELECT * FROM rainfall where Country = ${country}`;
    database.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.status(200).send(results[0])
    })
}

const getTemperature = (req, res) => {
    const  country  = req.query.country;
    console.log(country);
    const query = `SELECT t.Country AS Country, t.Temperature as temperature, c.Normalize as CRI FROM temp AS t LEFT JOIN CRI_table AS c ON t.Country = c.Country WHERE t.Country = ${country}`;
    database.query(query,  (err, results) => {
        if (err) throw err;
        console.log(results);
        res.status(200).send(results[0]);
    })
}

const getSoil = (req, res) => {
    const { country } = req.query.country;
    const query = `SELECT * FROM soil_table WHERE Country = ${country}`;
    database.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.status(200).send(results[0])
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

module.exports = {
    predictFertility, 
    getCountryData, 
    getRainfall, 
    getTemperature, 
    getSoil
}