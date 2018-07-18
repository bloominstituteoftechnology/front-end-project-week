var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));