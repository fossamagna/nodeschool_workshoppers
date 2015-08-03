var fs = require('fs');

var filename = process.argv[2];
if (!filename) {
  console.log('Please specify filename.');
  return;
}

var data = fs.readFileSync(process.argv[2]);
var count = data.toString().split('\n').length - 1;
console.log(count);
