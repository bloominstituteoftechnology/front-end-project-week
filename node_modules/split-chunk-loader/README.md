# split-chunk-loader for webpack

## Credits

This loader is a fork of the [bundle-loader](https://github.com/webpack/bundle-loader).

The original fork was created in the [require-error-handler-webpack-plugin](https://github.com/richardscarrott/require-error-handler-webpack-plugin/blob/master/src/BundleLoader.js)

## Installation

**require.ensure error handling must be activated in webpack for this loaded to work**

### Webpack 1.x

``` shell
npm install require-error-handler-webpack-plugin --save-dev
```

Follow [the instructions for configuring the require-error-handler-webpack-plugin](https://github.com/richardscarrott/require-error-handler-webpack-plugin/blob/master/README.md)

``` shell
npm install split-chunk-loader --save-dev
```

### Webpack 2.2+

``` shell
npm install require-ensure-error-webpack-plugin --save-dev
```

Follow [the instructions for configuring the require-ensure-error-webpack-plugin](https://github.com/jharris4/require-ensure-error-webpack-plugin/blob/master/README.md)

``` shell
npm install split-chunk-loader --save-dev
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
// The chunk is requested, when you require it
var waitForChunk = require("split-chunk-loader!./file.js");

// To wait until the chunk is available (and get the exports)
//  you need to async wait for it.
waitForChunk(function(file) {
	// use file like is was required with
	// var file = require("./file.js");
});
// wraps the require in a require.ensure block
```

The file is requested when you require the split chunk loader. If you want it to request it lazily, use:

``` javascript
var load = require("split-chunk-loader?lazy!./file.js");

// The chunk is not requested until you call the load function
load(function(file) {

});
```

You may set the name for the chunk bundle file (`name` query parameter). See [documentation](https://github.com/webpack/loader-utils#interpolatename).

``` javascript
require("split-chunk-loader?lazy&name=my-chunk!./file.js"); // #.my-chunk.js
require("split-chunk-loader?name=my-chunk-[name]!./path/the-file.js"); // #.my-chunk-the-file.js
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
