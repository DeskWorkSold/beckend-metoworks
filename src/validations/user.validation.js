const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('freelancer', 'recuriter'),
  }),
};

const editPrifole = {
  body : Joi.object().keys({
    firstName :Joi.string(),
    lastName :Joi.string(),
    phoneNumber :Joi.string(),
    foundedIn :Joi.string(),
    whatsMakesUsSpecial :Joi.string(),
    companyName :Joi.string(),
    companyScope :Joi.string(),
    salaryRange :Joi.string(),
    headquarters :Joi.string(),
    companyLocation :Joi.string(),
    description :Joi.string(),
  })
}

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  editPrifole
};