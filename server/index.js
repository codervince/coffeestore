const express = require("express");

const app = express();


//MW for serving static content
app.use(express.static('client'));

app.get('/', (req, res) => {

});

app.listen(8080);
