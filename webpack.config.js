'use strict';
let debug = process.env.NODE_ENV !== "production";
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: [
        '../test.js'
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.(jpe?g|png|woff|svg|ttf|eot)$/i,
            loader: 'url?limit=1000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ZetInsight',
            filename: path.join(__dirname, '/dist/index.html'),
            hash: true
        })
    ],
    resolve: {
        root: path.join(__dirname, 'src')
    }
}
