const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to DB
connectDB();

app.get('/', (req, res) => {
    res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
});