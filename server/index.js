const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=> {
  res.write("Hello Node");

  setTimeout(()=> {
    res.write("still on");
    res.end();
  },3000);
  
});

server.listen(8080);
