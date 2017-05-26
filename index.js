'use strict';

var Spawn = require('./libs/spawn');

module.exports = {

  dump : function(opts) {
    var spawn = new Spawn("mongodump", opts);
    return spawn;
  },

  restore : function(opts) {
    var spawn = new Spawn("mongorestore", opts);
    return spawn;
  },

  export : function(opts) {
    var spawn = new Spawn("mongoexport", opts);
    return spawn;
  },

  import : function(opts) {
    var spawn = new Spawn("mongoimport", opts);
    return spawn;
  }

};
