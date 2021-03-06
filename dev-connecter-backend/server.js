const express = require('express');
const connectDB = require('./config/db');
const Cors = require('cors')

const app = express();

//Connect to DB
connectDB();

//Middleware
app.use(express.json());
app.use(Cors());

app.get('/', (req, res) => {
    res.send('Hello');
});

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
});