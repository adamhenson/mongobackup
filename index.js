'use strict';

var Spawn = require('./libs/spawn');

module.exports = {

  dump : function(opts) {
    var spawn = new Spawn("mongodump", opts);
  },

  restore : function(opts) {
    var spawn = new Spawn("mongorestore", opts);
  },

  export : function(opts) {
    var spawn = new Spawn("mongoexport", opts);
  },

  import : function(opts) {
    var spawn = new Spawn("mongoimport", opts);
  }  

};