const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        unique: true
    },
    year: {
        type: String
    },
    runtime: {
        type: String
    },
    genres: [{
            type: String,
            default : []
    }],
    director: {
        type: String
    },
    actors: {
        type: String
    },
    plot: {
        type: String
    },
    posterUrl: {
        type: String
    },

    
   
})


module.exports = new mongoose.model("NewMovie", movieSchema)
