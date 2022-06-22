const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter your name'],
        minlength: [2, 'Username must be at least 2 characters.'],
        maxlength: [20, 'Username must be less than 20 characters.'],
            
    },
    email:{
        type: String,
        unique: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Email is not a valid email format"]
    },
    password:{
        type: String,
        required: true,
        
        minLength: [5, 'Password is too short!']
    },
    picture:{
        type: String, //as it will be a path to the picture
    },
    favGenres: [{
        type: String,
        default : []
    }],

    favMovies: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        default : [],
    }]
})


module.exports = new mongoose.model("User", userSchema)