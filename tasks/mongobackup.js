'use strict';

var Spawn = require('../libs/spawn');

module.exports = function(manager) {

  manager.registerMultiTask('mongobackup', 'Task to import or export MongoDb', function() {

    var opts = this.options();
    var task = this.target;

    if(['dump','restore'].indexOf(task) === -1) {

      manager.log.writeln("Invalid argument passed: available options are 'mongobackup:dump' and 'mongobackup:restore'");
      return;

    } else {

      var spawn = new Spawn('mongo' + task, opts);

    }

  });
  
};