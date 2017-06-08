//npm install pg

var pg = require('pg');

// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools
var pool = new pg.Pool({
  database: 'coffee-dev',
  user: 'postgres', //ENV var PGUSER
  password: 'I17nvader' //ENV var PGPASSWORD
});


pool.query('SELECT * from coffees', [], function (err, result) {

      if (err) throw err;
    // just print the result to the console
      console.log(result.rows); // outputs: { name: 'brianc' }

    // disconnect the client
    //   client.end(function (err) {
    //     if (err) throw err;
    // });
  });
