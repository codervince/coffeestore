//file for managing api routes in application

const express = require('express');

const router = express.Router();

const pg = require('pg');

// const pool = new pg.Pool({
//   database: 'coffee-dev',
//   user: 'postgres', //ENV var PGUSER
//   password: 'I17nvader' //ENV var PGPASSWORD
// });

const pool = new pg.Pool({
  database: 'd92m039fkfvb02',
  user: 'npgdgpsnmawanl', //ENV var PGUSER,
  host: 'ec2-107-20-226-93.compute-1.amazonaws.com',
  password: '52434dcc41da873ee69a97cdca433c71719bce23c583d85c82b3f5ebd2cbc794', 
  ssl:true
});

// from heroku config
//postgres://npgdgpsnmawanl:52434dcc41da873ee69a97cdca433c71719bce23c583d85c82b3f5ebd2cbc794@ec2-107-20-226-93.compute-1.amazonaws.com:5432/d92m039fkfvb02

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
