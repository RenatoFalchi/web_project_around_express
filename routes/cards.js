const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if(err) {
      res.status(500).send({ message: 'Erro ao let o arquive de cards' });
      return;
    }

    res.send(JSON.parse(data));
  });
});

module.exports = router;