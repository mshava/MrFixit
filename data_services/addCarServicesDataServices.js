const QueryService = require('../data_services/query_services');
const bluebird = require('bluebird');

module.exports = function() {
    const queryService = new QueryService(connection);
    this.addCarServices = function(data) {
        return queryService.excuteQuery('insert into car_services set ?', data);
    };
};
