const MovieController = require('../controllers/movie.controller');
// the routes needs to pull in the controller

module.exports = (app) => { // need the express server app to
    app.get('/api/movies', MovieController.getAllMovies);
    app.post('/api/movies', MovieController.createMovie);
    //app.get('/api/movies/:id', ShelterController.getOne);
    //app.put('/api/movies/:id', ShelterController.update);
    //app.delete('/api/movies/:id', ShelterController.delete);
} 