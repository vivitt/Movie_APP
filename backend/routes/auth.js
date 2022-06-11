const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const authorization = require("../middleware/authorization")

//router.get('/users', checkAuthenticated, authController.renderIndexAuth);
//router.get('/register', authorization.checkNotAuthenticated, authController.renderRegisterPage);   
//router.get('/login', authorization.checkNotAuthenticated, authController.renderLoginPage);  

router.get('/',  authController.getUser);
router.post('/register',  authController.registerNewUser);
// router.post('/register', authorization.checkNotAuthenticated, authController.registerNewUser);
router.post('/login', authController.loginUser);
// router.post('/login', authorization.checkNotAuthenticated, authController.loginUser);


router.get('/logout', authController.logoutUser);




module.exports = router;