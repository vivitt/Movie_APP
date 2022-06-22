const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const initialize = require('../config/passport-config')
const passport = require('passport')


initialize(passport);


function getUser(req, res) {
    res.status(200).json({
    email: req.user.email,
    name: req.user.name,
    
  });
};

async function registerNewUser (req, res, next) { 
    try {
        userModel.findOne({ email: req.body.email }, async function (error, user) {
            if (user) {
                return res.status(400).send(`Email already taken.`);
            }else{
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const user = await userModel.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword       
                })
                return res.status(200).json({
                    email: user.email,
                    name: user.name,
                })
            }
            })
          
            } catch (err) {
                if (err.name == 'ValidationError') {
                    console.error('Error Validating!', err);
                    res.status(422).send(err);;
                } else {
                    console.error(err);
                    res.status(500).json(err);
                    }
                }
        
    }

function loginUser (req, res, next) {
    passport.authenticate("local", function (err, user) {
        if (err || !user) {
            res.status(401).send("Unauthorized");
        } else {
            req.login(user, function (err) {
                if (err) {
                    return next(err);
                }
                    res.status(200).json({
                    email: user.email,
                    name: user.name,
                     });
            });
        }
    }) (req, res, next);
};



function logoutUser (req, res) {
    req.logOut()        
    res.clearCookie("connect.sid", { path: "/" });
        req.session.destroy(function (err) {
            if (err) {
            return next(err);
            }
            res.status(200).send();
        });
    
    
}

module.exports = { getUser, registerNewUser, loginUser, logoutUser }