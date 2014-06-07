# grunt-blink

> Grunt plugin for [Blink](https://github.com/jedmao/blink).


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install --save-dev grunt-blink
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-blink');
```


## The "blink" task


### Overview
In your project's Gruntfile, add a section named `blink` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  blink: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```


### Options

Refer to [Blink IConfigurationOptions](https://github.com/jedmao/blink#iconfigurationoptions).


### Usage Examples


#### Default Options
In this example, the default options are used to compile `styles/app.js` into `tmp/app.css`.

```js
grunt.initConfig({
  blink: {
    options: {},
    files: {
      'tmp/app.css': ['styles/app.js'],
    }
  }
});
```


#### Custom Options
In this example, custom options are used to create a minified dist version of the css.

```js
grunt.initConfig({
  blink: {
    options: {
      style: 'compressed'
    },
    dist: {
      'dist/app.min.css': ['styles/app.js'],
    }
  }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
