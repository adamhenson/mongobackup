#mongobackup

[![npm](https://img.shields.io/npm/v/mongobackup.svg)]()
[![npm](https://img.shields.io/npm/dm/mongobackup.svg)]()
[![npm](https://img.shields.io/npm/dt/mongobackup.svg)]()

> A Grunt and Gulp compatible plugin to import or export MongoDb data by launching a child process, passing the commands for [mongodump](http://docs.mongodb.org/manual/reference/program/mongodump/), [mongorestore](http://docs.mongodb.org/manual/reference/program/mongorestore/), [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/), [mongoexport](https://docs.mongodb.com/manual/reference/program/mongoexport/) [MongoDB Package Components](http://docs.mongodb.org/manual/reference/program/).
>
> This plugin is similar to [grunt-mongo-backup](https://github.com/seogrady/grunt-mongo-backup) in that it spawns a child process. The difference in **mongobackup** is that it is compatible with both Grunt and Gulp. Another difference of **mongobackup** is that it provides a means to pass separate options for both dump and restore operations.

## Installation

Install package with NPM and add it to your development dependencies:

```
$ npm install mongobackup --save-dev
```

## Support

As this plugin depends on the node [child_process](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) module and the spawn method, it doesn't yet support Windows systems.

Tested on MongoDB 3.2 >.

## Usage

### Grunt

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('mongobackup');
```

Configure via `grunt.initConfig()`.

```javascript
grunt.initConfig({
  mongobackup: {
    dump : {
      options: {
        host : 'localhost',
        out : './dumps/mongo'
      }
    },
    restore: {
      options: {
        db : 'testdb',
        host : 'localhost',
        drop : true,
        path : './dumps/mongo/testdb'
      }
    },
    import: {
      // options
    },
    export: {
      // options
    }
  }
});
```

Then run:

```
$ grunt mongobackup:dump
```

Or:

```
$ grunt mongobackup:restore
```

Or:

```
$ grunt mongobackup:import
```

Or:

```
$ grunt mongobackup:export
```

### Gulp

```javascript
var mongobackup = require('mongobackup');

// mongodump - dump all databases on localhost
gulp.task('mongodump', function() {
  mongobackup.dump({
    host : 'localhost',
    out : './dumps/mongo'
  });
});

// mongorestore - restore 'testdb' database to localhost
gulp.task('mongorestore', function() {
  mongobackup.restore({
    db : 'testdb',
    host : 'localhost',
    drop : true,
    path : './dumps/mongo/testdb'
  });
});

gulp.task('mongoimport', function() {
  mongobackup.import({
    // options
  });
});

gulp.task('mongoexport', function() {
  mongobackup.export({
    // options
  });
});
```

Then run:

```
$ gulp mongodump
```

Or:

```
$ gulp mongorestore
```

Or:

```
$ gulp mongoimport
```

Or:

```
$ gulp mongoexport
```

## Options

- Any provided options (such as `host`, `out`, etc) are passed as arguments to [mongodump](http://docs.mongodb.org/manual/reference/program/mongodump/), [mongorestore](http://docs.mongodb.org/manual/reference/program/mongorestore/), [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/), or [mongoexport](https://docs.mongodb.com/manual/reference/program/mongoexport/). All arguments available in these two MongoDB Package Components are available as options. The boolean value `true` should be used for free standing arguments that don't accept a value, per the docs linked above.