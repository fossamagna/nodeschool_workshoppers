var http = require('http');

var results = [];
var urls = process.argv.slice(2);

urls.map(function(url, index) {
  http.get(url, function (res) {
    var content = '';
    res.setEncoding('utf8');
    res.on('data', function (data) {
      content += data;
    });
    res.on('end', function () {
      results[index] = content;
      if (results.length === urls.length) {
        results.forEach(function(v){
          console.log(v);
        });
      }
    });
  });
});
