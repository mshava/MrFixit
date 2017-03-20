const QueryServices = require('../data_services/query_services');
const bluebird = require('bluebird');

module.exports = fuction() {
  const queryServices = new QueryServices(connection);
  this.showAutoElectronics = function() {
    return queryServices.excuteQuery('select * from autoElectronics');
  };
};
