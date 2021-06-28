const Movie = require('../models/movie.model');

module.exports.getAllMovies = (req, res) => {
    console.log("Inside getAllMovies");
    
    Movie.find( { } ) // this finds all the movies
        .then((allMovies) => {
            console.log(allMovies);
            res.json(allMovies);
        })
        .catch((err) => {
            console.log(err);
        })
};

// create a movie
module.exports.createMovie = (req, res) => {
    console.log("Inside allMovies");
    console.log(req.body);

    Movie.create(req.body)
        .then((newMovie) => {
            console.log(newMovie)
            res.json(newMovie);
        })
}