const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // TODO: Must be between 1 and 280 char
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    username: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    // TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
