var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: "./public/src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "src/bundle.js",
    },

    module: {
        loaders: [
            { test: /\.css$/,
              loader: "style-loader!css-loader"
            },
        ],
    }
};