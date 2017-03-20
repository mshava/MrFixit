exports.show = function(function(req, res, next) {
  req.getConnection = function(function(err, connection) {
    if (err)
      return next(err);
        var query = 'select * from airConditioning';
        connection.query(query, [], function(err, results) {
          if (err)
            return next(err);
              var result = {
                  airConditioning : results
              };
              res.render('airConditioning', results);
        });
  });
});
