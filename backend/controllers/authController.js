const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const initialize = require('../config/passport-config')
const passport = require('passport')


initialize(passport);

function registerNewUser (req, res, next) { 
    try {
        userModel.findOne({ email: req.body.email }, async function (error, user) {
            if (user) {
                return res.status(400).send({
                message: `Email ${req.body.email} already taken`,
                });
            }else{
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                
                const user = await userModel.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword       
                })
                console.log(user)
      
            return res.status(200).json({
                email: user.email,
                name: user.name,
                })
            } 
        }
    )
}
    catch (error) {
            console.log("error creating user", error)
    
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

module.exports = { registerNewUser, loginUser, logoutUser }