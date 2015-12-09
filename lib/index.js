var Emitter = require('events').EventEmitter;
var validator = require('node-form-validator');

var orderEmitter = new Emitter();

var events = {
  create: 1,
  notify: 2
};

module.exports = {
  addListener: function(event, cb) {
    if (events[event]) {
      orderEmitter.once(event, cb);
      return true;
    }
    return false;
  },
  notify: function(error, data) {
    orderEmitter.emit('notify', error, data);
  },
  create: function(req, res) {
    orderEmitter.emit('create', req, res);
  },
  validate: function(data, error) {
    error = error || {};
    var conf = require('./validation');
    if (!validator.validate(data, conf.data, error)) {
      return false;
    }
    return true;
  }
};
