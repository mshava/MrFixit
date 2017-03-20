const QueryService = require('../data_services/query_services');
const bluebird = require('bluebird');

module.exports = function() {
  const queryService = new QueryService(connection);
  this.addAutoElectronics = function(data) {
    return queryService.excuteQuery('insert into autoElectronics set ?', data);
  };
};
