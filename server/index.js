// mount server

const express = require("express");
const cors = require('cors');
const app = express();

import serverRender from './render';
import apiRouter from './apiRouter';

app.use(cors());

//MW for serving static content
app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: serverRender()
  });
});

app.use('/api', apiRouter);

//for dynamic html need pug, ejs, handlebars templating language


app.listen(8080, () => {
  console.log("Server running...");
});
