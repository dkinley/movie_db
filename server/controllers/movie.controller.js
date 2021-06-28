const Movie = require('../models/movie.model');

module.exports.getAllMovies = (req, res) => {
    res.json("Inside getAllMovies");
    
    Movie.find( { } ) // this finds all the movies
        .then((allMovies) => {
            console.log("allMovies");
            res.json(allMovies);
        })
        .catch((err) => {
            console.log(err);
        })
};