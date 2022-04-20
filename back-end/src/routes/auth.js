const express = require('express');
const router = express.Router();

const AuthController = require('../app/controllers/AuthController');

router.post('/register', AuthController.createUser);
router.post('/login', AuthController.userLogin);

module.exports = router;