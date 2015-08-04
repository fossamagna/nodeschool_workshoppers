var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extname, callback) {
  if (!dirname) {
    callback('Please specify directory name.');
    return;
  }

  fs.readdir(dirname, function (err, list) {
    if (err) {
      return callback(err, list);
    }
    callback(null, list.filter(function(element) {
      return '.' + extname === path.extname(element);
    }));
  })
}
