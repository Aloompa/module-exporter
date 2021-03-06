const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
    	'module-exporter': './src'
    },
    output: {
    	path: path.resolve(__dirname) + '/dist',
    	filename: '[name].js',
    	sourceMapFilename: '[name].map'
    },
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=stage-0,presets[]=es2015'
    }],
    plugings: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
