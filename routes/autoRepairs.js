exports.show = function(function(req, res, next) {
  req.getConnection = function(function(err, connection) {
    if(err)
      return next(err);
        var query = 'select * from autoRepairs';
        connection.query(query, [], function(err, results) {
          if(err);
            return next(err);
              var result = {
                  autoRepairs = results
              };
              res.render('autoRepairs', results);
        });
  });
});
