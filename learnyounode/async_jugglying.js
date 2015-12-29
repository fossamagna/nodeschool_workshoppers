var http = require('http');

var results = [];
var urls = process.argv.slice(2);
var count = 0;

urls.map(function(url, index) {
  http.get(url, function (res) {
    var content = '';
    res.setEncoding('utf8');
    res.on('data', function (data) {
      content += data;
    });
    res.on('end', function () {
      count++;
      results[index] = content;
      if (count === urls.length) {
        results.forEach(function(v){
          console.log(v);
        });
      }
    });
  });
});
