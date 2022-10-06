const db = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');
const reactionData = require('./reactionData.json');

db.once('open', async () => {
  console.log('connected');
  // clean db
  await Thought.deleteMany({});
  await User.deleteMany({});
  await Reaction.deleteMany({});

  // populate db with seed data
  await User.collection.insertMany(userData);
  await Thought.collection.insertMany(thoughtData);
  await Reaction.collection.insertMany(reactionData);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
