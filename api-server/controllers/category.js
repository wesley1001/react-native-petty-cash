var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://postgres:1234@localhost:5432/pettycash';

router.get('/all', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          done(); 
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM category ORDER BY id ASC;");

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

module.exports = router