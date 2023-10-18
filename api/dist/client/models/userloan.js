"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userLoanSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  loanid: {
    type: String,
    required: true
  },
  amount: {
    type: Number
  },
  totalrepayment: {
    type: Number
  }
});
var UserLoan = mongoose.model('UserLoan', userLoanSchema);
module.exports = UserLoan;