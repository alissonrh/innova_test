const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';
const error404Message = 'Usuário não encontrado'

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user) return res.status(404).json({ message: error404Message });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};


const createUser = async (req, res) => {
  try {
    const { fullName, email, phone, whatsApp } = req.body;
    const newUser = await UserService.createUser(fullName, email, phone, whatsApp);

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { fullName, email, phone, whatsApp } = req.body;
    const { id } = req.params;
    const updatedUser = await UserService.updateUser(id, fullName, email, phone, whatsApp);

    if (!updatedUser) return res.status(404).json({ message: error404Message });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await UserService.deleteUser(id);

    if (!deleteUser) return res.status(404).json({ message: error404Message });

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
};