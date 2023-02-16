const express = require('express');
const controller = require('../controllers/user');
// const middleware = require('../middlewares/user');
// const validateToken = require('../middlewares/token');

const router = express.Router();

router.post('/', 
    // middleware.validateDisplayName,
    // middleware.validateEmail,
    // middleware.validatePassword,
    controller.postUser);

// router.get('/', validateToken, controller.getUserAll);
// router.get('/:id', validateToken, controller.getUserbyId);

module.exports = router;