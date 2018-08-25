const express = require('express');
const router = express.Router();


//Register route

router.get('/register', (req, res, next) => {
    res.send('This is register screen');
});

router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

router.get('/profile', (req, res, next) => {
    res.send('Profile');
});



module.exports = router;