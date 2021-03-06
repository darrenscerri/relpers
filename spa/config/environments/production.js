var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/relpers/v1.1/',
  });

}

module.exports = productionConfig;
