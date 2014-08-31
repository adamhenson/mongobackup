'use strict';

var spawn = require('child_process').spawn;

module.exports = function(cmd, opts) {

  var args = [];

  // 'path' is an argument for the mongorestore program
  // options without a value (like 'drop') should be set as true in the gulpfile

  for (var prop in opts) {
    if(prop === 'path') args.push(opts[prop]);
    else if(opts[prop] === true) args.push('--' + prop);
    else if(opts[prop] !== false) args.push('--' + prop + '=' + opts[prop]);
  }

  return spawn(cmd, args, { stdio: [ process.stdin, process.stdout, process.stderr ] });

};