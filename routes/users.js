const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if(err) {
      res.status(500).send({ message: 'Erro ao ler o arquivo de usuários' });
      return;
    }

    res.send(JSON.parse(data));
  });
});

router.get('/:id', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if(err) {
      res.status(500).send({ message: 'Erro ao ler o arquivo de usuários' });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.id);

    if(!user) {
      res.status(404).send({ message: 'ID do usuário não encontrado' });
      return;
    }

    res.send(user);
  });
});

module.exports = router;

/* const users= require('../data/users.json');

router.get('/', (req,res) => {
  res.send(users);
});

router.get('/:id', (req,res) => {
  const user = users.find((item) => item._id === req.params.id);

  if(!user) {
    res.status(404).send({ message: 'ID do usuário não encontrado' });
    return;
  }

  res.send(user);
});

module.exports = router; */