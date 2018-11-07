const express = require('express');
const User = require('../models/user');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const spotifyWebApi = require('spotify-web-api-node');
const credentials = require('../creds/spotify');

// const User = require('../models/user');

//Register route

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'Successfully added user'});
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                   expiresIn: 604800 //one week worth of seconds 
                });

                res.json({
                    success: true,
                    token: 'bearer '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email

                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

// spotify web api and app realted stuff goes here


router.get('/getalbums', (req, res, query) => {
    spotifyApi.searchArtists(req)
        .then((data) => {
            console.log('Albums Information', data.body);
            res.send(data.body);
        }, (err) => {
            console.log(err);
        });
});

router.get('/getArtist', (req, res) => {
    spotifyApi.getArtist(req)
        .then((data) => {
            res.send(data.body);
            console.log(data.body);
        }, (err) => {
            console.log(err);
            res.send(err);
        });
})

var spotifyApi = new spotifyWebApi({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret
})

spotifyApi.clientCredentialsGrant()
  .then((data) => {
    console.log('The access token is' + data.body['access_token']);
    spotifyApi.setAccessToken(data.body['access_token']);
  }, (err) => {
    console.log('Something went wrong!', err);
});


module.exports = router;