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

export.add = function() {

};
