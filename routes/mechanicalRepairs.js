exports.show = function(fuction(req, res, next) {
  req.getConnection = function(function(err, connection) {
    if(err)
      return next(err);
        var query = 'select * from machanicalRepairs';
        connection.query(query, [], fuction(err, results) {
          if(err)
            return next(err);
              var result = {
                  mechanicalRepairs : results
              };
              res.render('mechanicalRepairs', results);
        });
  });
});
