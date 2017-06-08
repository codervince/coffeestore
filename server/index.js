// mount server

const express = require("express");

const app = express();

import serverRender from './render';


//MW for serving static content
app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: serverRender()
  });
});

//for dynamic html need pug, ejs, handlebars templating language


app.listen(8080, () => {
  console.log("Server running...");
});
