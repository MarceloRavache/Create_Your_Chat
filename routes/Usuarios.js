const route = require('express').Router();
const UsuariosController = require('../controllers/UsuariosController');

route.post('/login', UsuariosController.postLogin);
route.post('/register', UsuariosController.postRegister);

module.exports = route;
