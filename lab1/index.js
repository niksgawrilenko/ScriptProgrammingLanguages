require('dotenv').config();

const express = require("express");
const message = require("./message")
const app = express();

app.get("/", (request, response) => {
    response.send(`<h1>${message()}</h1><h2>${process.env.HELLO}</h2>`);
});

app.get("/user", (request, response) => {
    response.send({name: process.env.NAME, age: process.env.AGE});
});


app.listen(3000);
