const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.get('/:fullName', userController.getUserByFullName);
router.get('/', userController.getAllUsers);
router.put('/update', userController.updateUser);
router.delete('/delete', userController.deleteUser);

module.exports = router;
