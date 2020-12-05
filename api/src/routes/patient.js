const express = require('express');
const router = express.Router();
var PatientControler = require('../controllers/patient');

router.get('/allPatients', PatientControler.getAllPatients);
router.get('/patient', PatientControler.getPatient);
router.get('/patientByName', PatientControler.getPatientByName);
router.post('/patient', PatientControler.addPatient);
router.put('/patient', PatientControler.updatePatient);
router.delete('/patient', PatientControler.deletePatient);

module.exports = router;