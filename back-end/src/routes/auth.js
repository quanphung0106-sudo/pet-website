const express = require('express');
const router = express.Router();

const AuthController = require('../app/controllers/AuthController');

router.post('/register', AuthController.createUser);
router.post('/login', AuthController.userLogin);
router.post('/reset-password', AuthController.resetPassword);
router.post('/change-password', AuthController.changePassword);
module.exports = router;