var http = require('http');
var url = require('url');

function parseTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function unixtime(date) {
  return {unixtime: date.getTime()};
}

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);
  var date = new Date(urlObj.query.iso);
  var value;
  if (urlObj.pathname === '/api/parsetime') {
    value = parseTime(date);
  } else if (urlObj.pathname === '/api/unixtime') {
    value = unixtime(date);
  }

  if (value) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(value));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
