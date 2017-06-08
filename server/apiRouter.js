//file for managing api routes in application

const express = require('express');

const router = express.Router();

const pg = require('pg');

const pool = new pg.Pool({
  database: 'coffee-dev',
  user: 'postgres', //ENV var PGUSER
  password: 'I17nvader' //ENV var PGPASSWORD
});


router.get('/coffees', (req, res) => {

  pool.query('SELECT * from coffees', [], function (err, result) {
        if (err) throw err;
        res.send(result.rows);
    });

});

router.get('/coffees/:coffeeId/ratings', (req, res) => {

  pool.query('SELECT * from reviews WHERE coffee_id = $1', [req.params.coffeeId], function (err, result) {
        if (err) throw err;
        res.send(result.rows);
    });
});


export default router;
