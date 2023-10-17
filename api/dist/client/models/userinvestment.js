"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userInvestmentSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true //id of loan item
  },

  amount: {
    type: Number,
    required: true
  },
  profit: {
    type: Number,
    "default": 0
  },
  loss: {
    type: Number,
    "default": 0
  },
  status: {
    type: String,
    "default": 'created'
  },
  deadline: {
    type: String
  },
  additionaldata: {
    type: Schema.Types.Mixed,
    "default": {}
  }
});
var UserInvestment = mongoose.model('UserInvestment', userInvestmentSchema);
module.exports = UserInvestment;