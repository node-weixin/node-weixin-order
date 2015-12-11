import assert from 'assert';
import nodeWeixinOrder from '../lib';

describe('node-weixin-order', function() {
  it('should be able to add listener!', function() {
    assert.equal(true, nodeWeixinOrder.addListener('create', function() {

    }));
  });
  it('should not be able to add listener!', function() {
    assert.equal(false, nodeWeixinOrder.addListener('create1', function() {}));
  });
  it('should be able to send create message', function(done) {
    assert.equal(true, nodeWeixinOrder.addListener('create', function(req, res, cb) {
      assert.equal(true, req.name === 'req');
      assert.equal(true, res.name === 'res');
      cb(false, {cb: 'cb'});
    }));
    nodeWeixinOrder.create({
      name: 'req'
    }, {
      name: 'res'
    }, function(error, data) {
      assert.equal(true, !error);
      assert.equal(true, data.cb === 'cb');
      done();

    });
  });

  it('should be able to send notify message', function(done) {
    assert.equal(true, nodeWeixinOrder.addListener('notify', function(req, res) {
      assert.equal(true, req.name === 'req');
      assert.equal(true, res.name === 'res');
      done();
    }));
    nodeWeixinOrder.notify({
      name: 'req'
    }, {
      name: 'res'
    });
  });

  it('should be able to validate ', function() {
    assert.equal(true, nodeWeixinOrder.validate({
      openid: 'sfdsfsofdosfsofd',
      /*eslint camelcase: [2, {properties: "never"}]*/
      spbill_create_ip: '127.0.0.1',
      /*eslint camelcase: [2, {properties: "never"}]*/
      notify_url: 'http://localhost',
      body: 'ASFDOSOFSDF',
      /*eslint camelcase: [2, {properties: "never"}]*/
      total_fee: 1,
      /*eslint camelcase: [2, {properties: "never"}]*/
      out_trade_no: 'SOSODFSFSFDF',
      /*eslint camelcase: [2, {properties: "never"}]*/
      trade_type: 'JSSDK'
    }, {}));
    assert.equal(false, nodeWeixinOrder.validate({}, {}));
  });
});
