const express = require('express');
const router = express.Router();
var TreatmentControler = require('../controllers/treatment');

router.get('/allTreatments', TreatmentControler.getAllTreatments);
router.get('/treatment', TreatmentControler.getTreatment);
router.get('/treatmentByName', TreatmentControler.getTreatmentByName);
router.post('/treatment', TreatmentControler.addTreatment);
router.put('/treatment', TreatmentControler.updateTreatment);
router.delete('/treatment', TreatmentControler.deleteTreatment);

module.exports = router;