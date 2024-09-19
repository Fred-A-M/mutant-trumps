const mongoose = require('mongoose');
const Card = require('./dbconnect');

const cards = [
  {
    name: 'Q-Tip Man',
    size: 60,
    strength: 50,
    intelligence: 61,
    imageURL: './src/assets/characters/QtipMan.jpeg'
  },
  {
    name: 'Jelly Grandma',
    size: 41,
    strength: 37,
    intelligence: 71,
    imageURL: './src/assets/characters/JellyGrandma.jpeg'
  },
  {
    name: 'Ganja Lapwing',
    size: 20,
    strength: 33,
    intelligence: 64,
    imageURL: './src/assets/characters/GanjaLapwing.jpeg'
  },
  {
    name: 'Broccoli Scot',
    size: 36,
    strength: 82,
    intelligence: 62,
    imageURL: './src/assets/characters/BroccoliScot.jpeg'
  },
  {
    name: 'Giant Preacher',
    size: 91,
    strength: 69,
    intelligence: 15,
    imageURL: './src/assets/characters/GiantPreacher.jpeg'
  },
  {
    name: 'Pub Vampire',
    size: 74,
    strength: 67,
    intelligence: 83,
    imageURL: './src/assets/characters/PubVamp.jpeg'
  },
  {
    name: 'Rat Lady',
    size: 51,
    strength: 38,
    intelligence: 76,
    imageURL: './src/assets/characters/RatLady.jpeg'
  },
  {
    name: 'Eyelash',
    size: 5,
    strength: 58,
    intelligence: 32,
    imageURL: './src/assets/characters/Eyelash.jpeg'
  },
  {
    name: 'Netflix Fiend',
    size: 55,
    strength: 21,
    intelligence: 42,
    imageURL: './src/assets/characters/NetflixFiend.jpeg'
  },
  {
    name: 'Big Benny',
    size: 100,
    strength: 93,
    intelligence: 7,
    imageURL: './src/assets/characters/BigBenny.jpeg'
  },
  {
    name: 'Chimney Penguin',
    size: 34,
    strength: 66,
    intelligence: 62,
    imageURL: './src/assets/characters/ChimneyPenguin.jpeg'
  },
  {
    name: 'Accountant Eel',
    size: 48,
    strength: 28,
    intelligence: 89,
    imageURL: './src/assets/characters/AccountantEel.jpeg'
  },
];

(async function seedDB () {
  try {
    await Card.deleteMany({}); // Clear the collection first
    await Card.insertMany(cards); // Insert predefined cards
    console.log('Database seeded with cards!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
})();