"use strict";

var _user = _interopRequireDefault(require("./user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = new Schema({
  user: {
    type: String,
    "default": null
  },
  label: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  adminmsg: {
    type: Boolean,
    "default": false
  }
});
var Message = mongoose.model('Message', messageSchema);
module.exports = Message;