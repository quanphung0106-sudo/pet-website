const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');

router.get('/', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.delete('/', UserController.deleteAllUsers);

module.exports = router;