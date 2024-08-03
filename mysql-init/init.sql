
CREATE DATABASE IF NOT EXISTS fetility;

USE fertility;

CREATE TABLE IF NOT EXISTS fertility(
    id int AUTO_INCREMENT, 
    country VARCHAR(50), 
    image VARCHAR(50),
    temperature INT, 
    temperature_rate INT, 
    temperature_intercept INT,
    rainfall INT, 
    rainfall_rate INT,
    rainfall_intercept INT,
    soil_type INT, 
    PRIMARY KEY(id)
);

INSERT INTO fertility ( country, image, temperature, temperature_rate, rainfall, rainfall_rate, soil_type) VALUES 
    ("Japan", "japan.png", 20, 1.234, 1, 40, 3.143, 1, 2);
