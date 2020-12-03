const express = require('express');
const router = express.Router();
var UserControler = require('../controllers/user');

router.get('/user', UserControler.getUser);
router.post('/user', UserControler.addUser);
router.put('/user', UserControler.updateUser);
router.delete('/user', UserControler.deleteUser);

module.exports = router;