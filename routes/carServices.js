exports.show = function(req, res, next) {
  req.getConnection(funtion(err, connection) {
    if(err)
      return next(err);
        var query = 'select * from carServices';
        connection.query(query, [], function(err, results) {
          if(err)
            return next(err);
              var result = {
                  carServices : results
              };
              res.render('carServices', results);
        });
  });
};

/*
exports.show = function(req, res, next) {
    var car_services_id = req.params.id;
      req.getServices()
        .then(function(services){
            const addCarServicesDataServices = services.addCarServicesDataServices;
            addCarServicesDataServices.seeCarServices()
              .then(function(car_services) {
                  res.render('addCarServices', {
                      car_services : car_services
                  });
              });
                .catch(function(err) {
                    next(err);
                });
        });
};
*/
