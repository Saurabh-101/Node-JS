const express = require('express');
const router = express.Router();
const {getPeople,createPeople,putPeople} = require('../controllers/api')

router.post('/people',createPeople)

router.put('/people/:id',putPeople)

router.get('/people/:id',getPeople)

module.exports = router;

