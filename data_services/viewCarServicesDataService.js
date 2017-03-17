const QueryService = require('../data_services/queryService');
const bluebird = require('bluebird');

module.exports = function() {
    const queryService = new QueryService(connection);
    this.addCarServices = function(data) {
        return queryService.excuteQuery('insert into car_services set ?', data);
    };
};
