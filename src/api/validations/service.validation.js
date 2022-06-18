const Joi = require('joi');
const Service = require('../models/service.model');

module.exports = {

  // GET /v1/services
  listServices: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      name: Joi.string(),
      description: Joi.string(),
    },
  },

  // POST /v1/services
  createService: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().min(1).max(128).required(),
      parentId: Joi.string().max(128),
      swagger: Joi.string().required(),
    },
  },

  // PUT /v1/services/:serviceId
  replaceService: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().min(1).max(128).required(),
      parentId: Joi.string().max(128),
      swagger: Joi.string().required(),
    },
    params: {
      serviceId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },

  // PATCH /v1/services/:serviceId
  updateService: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().min(1).max(128).required(),
      parentId: Joi.string().max(128),
      swagger: Joi.string().required(),
    },
    params: {
      serviceId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },
};
