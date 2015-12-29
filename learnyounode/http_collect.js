var http = require('http');

http.get(process.argv[2], function (res) {
  var content = '';
  res.setEncoding('utf8');
  res.on('data', function (data) {
    content += data;
  });
  res.on('end', function () {
    console.log(content.length);
    console.log(content)
  });
});
