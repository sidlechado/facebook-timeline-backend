const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    author: String,
    content: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', PostSchema);
