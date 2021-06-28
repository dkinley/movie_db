const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,  //this is the validation for a product
        required: [ true, "The title is required."],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "The title is required to be least 3 characters long."],
        unique: [true, "Name taken! The name must be unique."],
    },
    yearReleased: {
        type: Number,
    },
    genre: {
        type: String,  //this is the validation for a product
        required: [ true, "The genre is required."],  //true - this is a required field, the 2nd part is the requirement
        enum: [ [
            "Action",
            "Comedy",
            "Fantasy",
            "Horror",
            "Sci-Fi"
            ], 
            "You selected an invalid genre"]
        },

    producer: { 
        type: String,
        required: [ true, "The producer is required."],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "The producer is required to be least 3 characters long."],
    },

    length: {
        type: Number,
        required: [ true, "Movie lenght in minutes is required."],  //true - this is a required field, the 2nd part is the requirement
        minlength: [30, "The movie is required to be least 30 minutes long."],
    },

    dateProduction: { type: Date },
    genre: { 
        type: String,  //this is the validation for a product
        required: [ true, ""],  //true - this is a required field, the 2nd part is the requirement
        enum: [
            "G",
            "PG",
            "PG-13",
            "R",
            "NR"
            ], 
        },

    isOnNetflix: { type: Boolean },
        type: Boolean,
        default: false
    },

    coverArtUrl: { 
        type: String
        },

}, { timestamps: true }); // need it! this is the options of the Schema, required

// the string to export that you use here is the name of the collection inside of the db
// the collection name will be lowercase, regardless of how you type it
// 2nd piece to export is the schema
module.exports = mongoose.model("Movie", MovieSchema);