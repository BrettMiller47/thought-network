const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});
  await Reaction.deleteMany({});

  const users = [
    {
      reactionBody: 'reactionBodySeed1',
      username: 'username1',
      createdAt: Date.now()
    },
    {
      reactionBody: 'reactionBodySeed2',
      username: 'username2',
      createdAt: Date.now()
    },
    {
      reactionBody: 'reactionBodySeed3',
      username: 'username3',
      createdAt: Date.now()
    }
  ];
  const thoughts = [
    {
      thoughtText: 'thoughtText1',
      createdAt: Date.now(),
      username: 'username1'
    },
    {
      thoughtText: 'thoughtText2',
      createdAt: Date.now(),
      username: 'username2'
    },
    {
      thoughtText: 'thoughtText3',
      createdAt: Date.now(),
      username: 'username3'
    },
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(videos);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
