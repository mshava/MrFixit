exports.show = fuction(function(req, res, next) {
  req.getConnection = function(function(err, connection) {
    if(err)
      return next(err);
        var query = 'select * from autoElectronics';
        connection.query(query, [], function(err, results) {
          if(err)
            return next(err);
              var results = {
                  autoElectronics : results
              };
              res.render('autoElectronics', results);
        });
  });
});
