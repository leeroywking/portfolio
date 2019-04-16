'use strict'

require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
    response.status(200).send('<h1>Hello</h1>')
});

app.get('/data', (request, response) => {
    let airplane = {
        departure: Date.now(),
        canFly: true, 
        pilot: 'Drunk'
    }
    response.status(200).json(airplane);
});

app.use('*', (request, response) =>  response.send('Sorry that rouse does not exist dummy'));

app.listen(PORT, () => console.log(`My ?fiftieth? Server is listening on port ${PORT}`));
