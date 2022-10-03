const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.types.ObjectId,
      default: new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = { Reaction };