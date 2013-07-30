# grunt-simple-vows

A simple wrapper for running tests with Vows.
This is inspired by [grunt-simple-mocha][mocha].


## Installation
1. Install this grunt plugin next to your project's
   [grunt.js gruntfile][getting_started] with: `npm install grunt-simple-mocha`

2. Then add this line to your project's `grunt.js` gruntfile:
   ```javascript
   grunt.loadNpmTasks('grunt-simple-vows');
   ```

## Usage

In your grunt.js:

```javascript
grunt.initConfig({
  simplevows: {
    all: {
      src: 'test/**/*.js',
      options: {
        reporter: 'spec'
      }
    }
  }
});

// For this to work, you need to have run `npm install grunt-simple-vows`
grunt.loadNpmTasks('grunt-simple-vows');

// Add a default task. This is optional, of course :)
grunt.registerTask('default', 'simplevows');
```

Now, you can just run `grunt simplevows` in your shell to run the tests. That's it!

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code using [grunt][grunt_github].

## License
Copyright (c) 2012 Michael Mior
(based on code from Mukund Lakshman)

Licensed under the MIT license.

[grunt_github]: http://github.com/cowboy/grunt
[mocha]: https://github.com/yaymukund/grunt-simple-mocha
