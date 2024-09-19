const Card = require('./dbconnect');

const getAll = async () => {
  try {
    let res = await Card.find({});
    return res;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {getAll};