'use strict';
const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const logger = require('./middleware/logger');
const validater = require('./middleware/validater');

const app = express();


app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello from server');
})

app.get('/person', validater, (req, res) => {
    const result = { name: req.query.name }
    res.json(result);
});

app.get('/bad', (req, res) => {
    throw new Error('Error');
})

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
    serverApp: app,
    start: (port) => {
        app.listen(port, () => console.log(`Listening on ${port}`))
    }
}