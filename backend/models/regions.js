const express = require("express");
const database = require("../database/db");
const MLR = require("ml-regression").MLR;

const predictFertility = (req, res) => {
    const area = req.params.area;

    const query = "SELECT * FROM  WHERE area = ?";
    database.query(query, [area], (err, results) => {
        if (err) throw err;
        
        const features = [];
        const target = [];
        results.map((result) => {
            features.push([result.fertility, result.temperature]); // assume the database has fertility and temperature
        });

        results.map((result) => [
            target.push(result.yield)
        ]);

        const mlr = new MLR(features, target);

        res.status(200).send({model: mlr});

    })
}

module.exports = {
    predictFertility
}