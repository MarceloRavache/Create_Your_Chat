const express = require('express');
const bodyParse = require('body-parser');
const app = express();

const usuarios = require('./routes/Usuarios');
const chat = require('./routes/Chat');

//Configs express
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

app.use('/usuario', usuarios);
app.use('/chat', chat);

app.listen(3000);
