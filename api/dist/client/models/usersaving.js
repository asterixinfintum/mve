"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSavingSchema = new Schema({
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
    required: true,
    "default": 0
  },
  target: {
    type: Number,
    required: true
  },
  loss: {
    type: Number,
    required: true,
    "default": 0
  },
  status: {
    type: String,
    "default": 'pending' //accepted
  },

  deadline: {
    type: String
  },
  additionaldata: {
    type: Schema.Types.Mixed,
    "default": {}
  }
});
var UserSaving = mongoose.model('UserSaving', userSavingSchema);
module.exports = UserSaving;