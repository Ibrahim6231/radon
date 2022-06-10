const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');



router.get('/firstAPI', userController.fun1);
router.get('/secondAPI', userController.fun2);
router.get('/thirdAPI', userController.fun3);








module.exports = router;