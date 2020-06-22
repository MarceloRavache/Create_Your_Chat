const route = require('express').Router();

const ChatController = require('../controllers/ChatController');

route.post('/comment', ChatController.postComment);

module.exports = route;
