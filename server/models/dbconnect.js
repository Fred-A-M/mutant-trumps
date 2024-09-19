const mongoose = require('mongoose');

(async function connectDB () {
  await mongoose.connect('mongodb://127.0.0.1/mutantTrumps')
  console.log('Connected successfully to MongoDB server');
})();

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  strength: {
    type: Number,
    required: true
  },
  intelligence: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;