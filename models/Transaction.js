const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add positive or negative numbers"],
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Transactions', TransactionSchema);