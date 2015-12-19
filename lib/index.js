var events = require('node-weixin-events');
var validator = require('node-form-validator');

module.exports = {
  notify: function(error, data) {
    events.emit(events.ORDER_NOTIFY, [error, data]);
  },
  create: function(req, cb) {
    events.emit(events.ORDER_CREATE, [req, cb]);
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
