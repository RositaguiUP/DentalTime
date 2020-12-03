const express = require('express');
const router = express.Router();
var PatientControler = require('../controllers/patient');

router.get('/patient', PatientControler.getUser);
router.post('/patient', PatientControler.addUser);
router.put('/patient', PatientControler.updateUser);
router.delete('/patient', PatientControler.deleteUser);

module.exports = router;