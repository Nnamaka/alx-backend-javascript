const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
});

app.listen(port, hostname, () => {
});

module.exports = app;