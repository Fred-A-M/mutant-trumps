const cards = require('./models/cards')

async function getCards (req, res) {
  try {
    const result = await cards.getAll();
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};


module.exports = { getCards };