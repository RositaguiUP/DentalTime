const express = require('express');
const router = express.Router();
var UserControler = require('../controllers/user');

router.get('/users', UserControler.getUsers);
router.post('/users', UserControler.addUser);

module.exports = router;