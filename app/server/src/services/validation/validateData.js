const Joi = require('joi');

const schema = Joi.object({
  fullName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  whatsApp: Joi.string().required(),
  phone: Joi.string().required(),
});

const validate = (data) => {
  const {error} = schema.validate(data);
  if (error) {
    return { type: 400, message: error.message };
  }
  return { type: null, message: '' };
};

module.exports = validate;