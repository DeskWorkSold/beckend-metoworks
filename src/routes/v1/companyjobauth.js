const express = require('express');
const validate = require('../../middlewares/validate');
const {jobValidation} = require('../../validations/index');
const jobController = require('../../controllers/job.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', validate(jobValidation.post), jobController.post);

module.exports = router;
