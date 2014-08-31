> A Grunt and Gulp compatible plugin to import or export MongoDb data by launching a child process, passing the commands for [mongodump](http://docs.mongodb.org/manual/reference/program/mongodump/) and [mongorestore](http://docs.mongodb.org/manual/reference/program/mongorestore/) [MongoDB Package Components](http://docs.mongodb.org/manual/reference/program/).

## Installation

Install package with NPM and add it to your development dependencies:

```
$ npm install --save-dev mongobackup
```

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
        host : 'localhost',
        drop : true,
        path : './dumps/mongo/testdb'
      }
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
    host : 'localhost',
    drop : true,
    path : './dumps/mongo/testdb'
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

## Options

- Any provided options are passed to [mongodump](http://docs.mongodb.org/manual/reference/program/mongodump/) and [mongorestore](http://docs.mongodb.org/manual/reference/program/mongorestore/). The boolean value `true` should be used for options that don't accept a passed value, per the docs linked in the previous sentence.