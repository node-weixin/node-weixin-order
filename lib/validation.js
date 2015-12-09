module.exports = {
  data: {
    openid: {
      type: 'string',
      maxLength: 64,
      required: true
    },
    /*eslint camelcase: [2, {properties: "never"}]*/
    spbill_create_ip: {
      type: 'ip',
      required: true
    },
    /*eslint camelcase: [2, {properties: "never"}]*/
    notify_url: {
      type: 'url',
      required: true
    },
    body: {
      type: 'text',
      required: true
    },
    /*eslint camelcase: [2, {properties: "never"}]*/
    total_fee: {
      type: 'number',
      required: true
    },
    /*eslint camelcase: [2, {properties: "never"}]*/
    out_trade_no: {
      type: 'string',
      required: true
    },
    /*eslint camelcase: [2, {properties: "never"}]*/
    trade_type: {
      type: 'string',
      required: true
    }
  }
};
