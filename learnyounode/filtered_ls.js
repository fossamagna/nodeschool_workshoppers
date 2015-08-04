var fs = require('fs');
var path = require('path');

var dirname = process.argv[2];
var extension = process.argv[3];
if (!dirname) {
  console.log('Please specify directory name.');
  return;
}

fs.readdir(dirname, function (err, list) {
  if (err) {
    return;
  }
  list.filter(function(element) {
    return '.' + extension === path.extname(element);
  })
  .map(function(element) {
    console.log(element);
  });
})
