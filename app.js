const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

//On connection - if successful
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ config.database);
});

//On connection - if ERROR
mongoose.connection.on('error', (error) => {
    console.log('Database error '+ err);
});

const app = express();

const users = require('./routes/users');

// init cors middleware
app.use(cors());

//init body-parser middleware
app.use(bodyParser.json());

//Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Static foler -FREND
app.use(express.static(path.join(__dirname, 'client')));

app.use('/users', users);


app.get('/', (req, res) => {
    res.send('Hello sai dutt G.V work till 2 atleast!')
});

const port = process.env.port || '3300';

app.listen(port, () => {
    console.log('Node server started on port ' + port);
});