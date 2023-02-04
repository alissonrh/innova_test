const express = require('express');
const cors = require('cors');

const User = require('./controllers/user.controller');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/user', User.getAll);
app.get('/user/:id', User.getById);
app.post('/user', User.createUser);
app.put('/user/:id', User.updateUser);
app.delete('/user/:id', User.deleteUser);

module.exports = app;