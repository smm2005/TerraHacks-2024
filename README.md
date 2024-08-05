# Fertility Prediction Model

## Description

The fertility prediction model assesses and predicts trends in fertility over a selected country. The fertility prediction model evaluates the level of fertility based on soil quality, climate and the rainfall distribution of the land. Once the fertility prediction model makes it's assessment, then the fertility prediction model will provide solutions for future generations and possibly future governments so that they can take the most appropriate action.

## Features

### UI

- Using the React library of JavaScript as well as JSX and CSS were used in the development and styling of the website template.
- Home page

https://github.com/user-attachments/assets/15bccab6-da14-4c2a-bdb7-5bc1792b6827

- Model page

https://github.com/user-attachments/assets/8aba7938-7eeb-4853-a756-e73611f4feba

- Solution page

https://github.com/user-attachments/assets/28d1a958-f00d-425d-904b-417fe2c85c1f


### Back end 

- Using Express.js to communicate between the front-end and the database given the user input.
- We also added the Hugging Face library in JavaScript to produce preventative solutions towards helping an area maintain it's current fertility.

### Database

- To store, retrieve and manipulate data, MySQL was used with both the front-end and the back-end code. 

## Instructions

Step 1: Clone the repository:

```
git clone https://github.com/smm2005/TerraHacks-2024.git
```

Step 2: Go to the main directory and create .env file

```
cd TeraHacks-2024
touch .env
```

Step 2.1: Complete the .env file 

```
MYSQLDB_USER=
MYSQLDB_ROOT_PASSWORD=
MYSQLDB_LOCAL_PORT=
MYSQLDB_DOCKER_PORT=
MYSQLDB_DATABASES=
MYSQLDB_HOST=

REACT_APP_BACKEND_URL=
```

Step 3: Go to the backend directory and create secret-data.js file 

```
cd backend
touch secret-data.js
```

Step 3.1: Complete the secret-data.js file

```
const default_user = "";
const default_password = "";
const default_database = "";
const default_host = "";
const HF_ACCESS_TOKEN = "";

module.exports = {
    default_database,
    default_host,
    default_password,
    default_user, 
    HF_ACCESS_TOKEN
}
```

NOTE: For the HF_ACCESS_TOKEN, it can be obtained from the Hugging Face if you want to use the Solution Feature

Step 4: Navigate back to the main project directory and start the docker compose:

```
docker compose up -d
```

Waiting for a few minutes and you can see the web page when go to ```localhost:3000```

Step 5: To stop the docker containers, remove all created images and volumes, navigate back to the main project directory and run this code:

```
docker compose down --rmi all -v
```



<h2 align="center"> &nbsp;Some Tools We Have Used and Learned In This Project</h2>
<p align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="bash" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" width="45" height="45"/>









