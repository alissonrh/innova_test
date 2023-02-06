const { User } = require('../models');
const validate = require('./validation/validateData');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};


const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};


const createUser = async (fullName, email, phone, whatsApp) => {
  const validateInput = validate({ fullName, email, phone, whatsApp })
  if (validateInput.type) return validateInput;

  const newUser = await User.create({ fullName, email, phone, whatsApp });
  return { type: 201, message: newUser };
};

const updateUser = async (id, fullName, email, phone, whatsApp) => {

  const validateInput = validate({ fullName, email, phone, whatsApp })
  console.log(validateInput);
  if (validateInput.type) return validateInput;

  const [updatedUser] = await User.update(
    { fullName, email, phone, whatsApp },
    { where: { id } },
  );
  return { type: 200, message: 'Usuário atualizado com sucesso!', updatedUser }
};

const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );
  return user;
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
};