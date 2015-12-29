var net = require('net');

function padding(value, length) {
  var s = value.toString();
  while(s.length < length) {
    s = "0" + s;
  }
  return s;
}

function now() {
  var d = new Date();
  var s = d.getFullYear()
  + "-"
  + padding(d.getMonth() + 1, 2)
  + "-"
  + padding(d.getDate(), 2)
  + " "
  + padding(d.getHours(), 2)
  + ":"
  + padding(d.getMinutes(), 2);
  return s;
}

function handler(socket) {
  socket.end(now() + '\n');
}

var server = net.createServer(handler);
server.listen(process.argv[2]);
