
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const authorization = require("../middleware/authorization")


router.get('/', authorization.checkAuthenticated, userController.getUser);
router.get('/favorites', authorization.checkAuthenticated, userController.getFavorites)

router.post('/favorites/:movie', authorization.checkAuthenticated, userController.addToFavorites)

router.post('/removefavorites/:movie', authorization.checkAuthenticated, userController.removeFromFavorites)


// router.get('/', userController.getAllMoviesUser);

// router.get('/onemovie/:movie', authorization.checkAuthenticated, userController.getMoreInfo);
// router.get('/rating', authorization.checkAuthenticated, userController.getMoviesByRating);

// router.post('/search', authorization.checkAuthenticated,  userController.redirectToFilter);
// router.get('/:filter', authorization.checkAuthenticated, userController.getMovieByFilter)

// router.get('/favorites', userController.getFavorites)
// router.post('/favorites/:movie', userController.addToFavorites)
// router.post('/removefavorites/:movie', userController.removeFromFavorites)

module.exports = router;
