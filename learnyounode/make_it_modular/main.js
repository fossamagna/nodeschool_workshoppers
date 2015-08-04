var filtered_ls = require('./module.js');

var dirname = process.argv[2];
var extension = process.argv[3];
filtered_ls(dirname, extension, function(err, files) {
  if (err) {
    console.error(err);
  }
  files.map(function(file) {console.log(file)});
});
