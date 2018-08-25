const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello my Man work till 2 atleast!')
});

const port = process.env.port || '3300';

app.listen(port, () => {
    console.log('Node server started on port ' + port);
});