const Joi = require('joi');

const post = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string(),
    foundedIn: Joi.string().required(),
    whatsMakesUsSpecial: Joi.string().required(),
    companyName: Joi.string().required(),
    companyScope: Joi.string().required(),
    salaryRange: Joi.string().required(),
    headquarters: Joi.string().required(),
    companyLocation: Joi.string().required(),
    description: Joi.string().required(),
    role: Joi.string(),
    url : Joi.string()
  }),
};

module.exports = {
    post
}