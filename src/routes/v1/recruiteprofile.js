const express = require('express');
const validate = require('../../middlewares/validate');
// const {jobValidation} = require('../../validations/index');
const recruiteprofileValidation = require('../../validations/recruiteprofile.validation')
// const jobController = require('../../controllers/job.controller');
const recruiteProfile = require('../../controllers/recruiterprofile')
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', validate(recruiteprofileValidation.post), recruiteProfile.post);

module.exports = router;