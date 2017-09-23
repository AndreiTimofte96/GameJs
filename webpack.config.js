var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/src",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.css$/,
              loader: "style-loader!css-loader"
<<<<<<< HEAD
=======

>>>>>>> 41ddd123897be8ddb1b9741f97121715c319510e
            },
        ],
    }
};