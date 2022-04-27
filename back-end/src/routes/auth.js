const express = require('express');
const router = express.Router();

const AuthController = require('../app/controllers/AuthController');

router.post('/register', AuthController.createUser);
router.post('/login', AuthController.userLogin);
router.get('/google', AuthController.loginByGoogle);
router.get('/google/callback', AuthController.callbackGoogle);
router.get('/login/failured', AuthController.loginFailured);
router.get('/login/success', AuthController.loginSuccess);
router.get('/logout', AuthController.logout);
// router.get('/acitve/user/:hash', AuthController.active);
// router.post('/send-email', AuthController.sendEmail);
router.get('/active-account/:email', AuthController.acctiveAccount);

module.exports = router;