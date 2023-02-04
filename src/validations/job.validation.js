const Joi = require('joi');

const post = {
  body: Joi.object().keys({
    jobTitle: Joi.string().required(),
    jobIndustry: Joi.string().required(),
    jobFunction: Joi.string().required(),
    subJobFunction: Joi.string(),
    jobLocation: Joi.string().required(),
    jobDiscription: Joi.string().required(),
    jobRequirements: Joi.string().required(),
    profession: Joi.string().required(),
    educationLevel: Joi.string().required(),
    employementType: Joi.string().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    madeOfWork: Joi.string().required(),
    noOfOpenings: Joi.string().required(),
    salaryInfo: Joi.string().required(),
    minSalary: Joi.string().required(),
    maxSalary: Joi.string().required(),
    salaryFreq: Joi.string().required(),
    salaryType: Joi.string().required(),
    postedDate: Joi.string().required(),
    additionalEmails: Joi.string().required(),
    role: Joi.string()
  }),
};

module.exports = {
    post
}