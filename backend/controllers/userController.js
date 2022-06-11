const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const passport = require('passeport')
const userModel = require('../models/User')
const movieModel = require('../models/Movie');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use(express.json());


async function getFavorites (req, res) {
    
    try {
        
        let userID = req.user.id;
        const user = await userModel.findOne({_id: userID}).populate('favMovies');
        const favUserMovies = user.favMovies;
        
        console.log(favUserMovies);
       
      
        if (favUserMovies.length >0 ) {
            return res.json({favUserMovies});
        } else res.send('You have not favorites yet !')
    
    } catch (err) {
        console.log(err)
        }
    };

// async function addToFavorites (req, res) {
//     try {
    
//     await userModel.updateOne({name: req.params.name},{$push: { favMovies: movieModel._id}});
//     const favUserMovies = await userModel.findOne({name: req.params.name},{favMovies: 1}).populate('favMovies');
//     res.send(favUserMovies);
//     } catch (err) {
//         console.log(err)
//         }
//     };

async function addToFavorites (req, res) {
    try {
    let userId = req.user.id;
    let movie = await movieModel.findOne({title: req.params.movie})
    console.log(userId)  
    let favmovie = await userModel.findOne({favMovies : movie._id})
    if(!favmovie) {
        await userModel.updateOne({_id: userId}, { $push: { favMovies: movie._id }})
         
        return res.status(200).json({
            title: req.params.movie ,
            id: movie._id,
          });
        }
        
    } catch (err) {
        console.log(err)
        }
}


    
async function removeFromFavorites (req, res) {
    try {
        let userId = req.user._id;
        let movie = await movieModel.findOne({title: req.params.movie})
        await userModel.updateOne({_id: userId}, { $pull: { favMovies: movie._id }})
        return res.status(200).json({
            title: req.params.movie ,
            id: movie._id,
          });
        } catch (err) {
            console.log(err)
            }
}




module.exports = { getFavorites, addToFavorites, removeFromFavorites }

