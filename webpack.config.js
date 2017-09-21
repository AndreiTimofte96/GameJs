var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/src",
        filename: "bundle.js"
    },
    target: "web",
    externals: [nodeExternals()],
    module: {
        loaders: [
            { test: /\.css$/,
            	exclude: __dirname + './node_modules',
              loader: "style-loader!css-loader"

            },
        ],
    },
	node: {fs: "empty"}
};