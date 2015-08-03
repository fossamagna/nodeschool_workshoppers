var fs = require('fs');

var filename = process.argv[2];
if (!filename) {
  console.log('Please specify filename.');
  return;
}

var data = fs.readFile(process.argv[2], function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  var count = data.toString().split('\n').length - 1;
  console.log(count);
});
